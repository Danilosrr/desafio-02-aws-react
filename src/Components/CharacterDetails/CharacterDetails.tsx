import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RxChevronLeft } from "react-icons/rx";
import { request } from "../../Api/api";
import loading from "../../Assets/loading.gif";

interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: { extension: string; path: string };
  comics: { items: { name: string; resourceURI: string   
 }[] };
  series: { items: { name: string; resourceURI: string }[] };
  stories: { items: { name: string; resourceURI: string }[] };
  events: { items: { name: string; resourceURI: string   
 }[] };
  urls: { type: string; url: string }[];
  modified: string; // Date of last modification
}

export default function CharacterDetails() {
  const { id } = useParams();
  const [noCharacter, setNoCharacter] = useState<boolean>(false);
  const [character, setCharacter] = useState<Character | null>(null);
  const [comics, setComics] = useState<Character[] | null>(null);

  async function getData() {
    try {
      const character = await request(`/v1/public/characters/${id}`);
      const comics = await request(`/v1/public/characters/${id}/comics?limit=20`);

      setCharacter(character.data.results[0] as Character);
      setComics(comics.data.results.map((c: Character) => c as Character));
      console.log(character.data.results[0], comics.data.results);
    } catch (error) {
      setNoCharacter(true);
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="main">
      {character ? (
        <div className="container">
          <nav>
            <RxChevronLeft color="#FF8100" />
            <a href="/characters">Voltar</a>
          </nav>
          <div className="character">
            <img
              className="cover"
              src={character.thumbnail.path + "." + character.thumbnail.extension}
              alt="character cover"
            />
            <aside>
              <section className="title">
                <h2>{character.name}</h2>
              </section>
              <div className="details">
                <article>
                  <h3>Primeira Aparição</h3>
                  <p>{character.modified.slice(0, 10)}</p>
                </article>
                <article>
                  <h3>Número de Séries</h3>
                  <p>{character.series.items.length}</p>
                </article>
                <article>
                  <h3>Número de Histórias</h3>
                  <p>{character.stories.items.length}</p>
                </article>
                <article>
                  <h3>Descrição</h3>
                  <p>{character.description || "No description available."}</p>
                </article>
              </div>
            </aside>
          </div>
          <div className="relatedComics">
            <h3>Quadrinhos relacionados</h3>
            <div className="row">
              {comics?.map((c) => (
                <figure className="thumbnail" key={c.id}>
                  <img
                    src={
                      c.thumbnail.path + "/portrait_medium" + "." + c.thumbnail.extension
                    }
                    alt={c.name}
                  />
                  <b>{c.name}</b>
                </figure>
              ))}
            </div>
          </div>
          <footer>Todos os direitos reservados a UOL Comics 2024</footer>
        </div>
      ) : (
        <div className="loader">
          {noCharacter ? <h4>Character not found</h4> : <img src={loading} alt="loading" />}
        </div>
      )}
    </main>
  );
}
