import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RxChevronLeft } from "react-icons/rx";
import { request } from "../../Api/api";

interface Character {
  id: number;
  name: string;
  comics: { items: { name: string; resourceURI: string } };
  description: string;
  thumbnail: { extension: string; path: string };
  images: { extension: string; path: string }[];
  hsitory: { history: number; type: string }[];
  series: { name: string; resourceURL: string };
  dates: { type: string; date: string }[];
}

interface Comic {
  id: number;
  title: string;
  thumbnail: { extension: string; path: string };
}

export default function CharacterDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState<Character | null>(null);
  const [characters, setCharacters] = useState<Character[] | null>(null);
  const [comics, setComics] = useState<Comic[]>([]);

  async function getData() {
    try {
      const character = await request(`/v1/public/character/${id}`);
      const characters = await request(
        `/v1/public/characters/${id}/comics?limit=20`
      );
      const comics = await request(
        `/v1/public/characters/${id}/comics?limit=3`
      );

      setCharacter(character.data.results[0] as Character);
      setCharacters(characters.data.results as Character[]);
      setComics(comics.data.results as Comic[]);
      console.log(
        character.data.results[0],
        character.data.results,
        comics.data.results
      );
      return;
    } catch (error) {
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
          Voltar
        </nav>
        <div className="comic">
          <img
            className="cover"
            src={character.images[0].path + "." + character.images[0].extension}
            alt="comic cover"
          />
          <aside>
            <section className="title">
              <h2>{character.name}</h2>
            </section>
            <div className="details">
              <article>
                <h3>Publicado em</h3>
                <p>{character.dates[0].date.slice(0, 4)}</p>
              </article>
              <article>
                <h3>Núm. de Páginas</h3>
              </article>
              
              <article>
                <h3>Série</h3>
                <p>{character.series?.name}</p>
              </article>
              <article className="characters">
                <h3>Personagens da obra</h3>
                <div className="row">
                  {comics.slice(0, 3).map((c) => {
                    return (
                      <figure className="character" key={c.title}>
                        <img
                          src={
                            c.thumbnail.path +
                            "/standard_medium" +
                            "." +
                            c.thumbnail.extension
                          }
                          alt="character"
                        />
                        <b>{c.title}</b>
                      </figure>
                    );
                  })}
                </div>
              </article>
            </div>
           
          </aside>
        </div>
        <div className="moreComics">
          <h3>Mais Obras</h3>
          <div className="row">
            {characters?.map((c) => {
              return (
                <figure className="thumbnail" key={c.id}>
                  <img
                    src={
                      c.thumbnail.path +
                      "/portrait_medium" +
                      "." +
                      c.thumbnail.extension
                    }
                    alt={c.name}
                  />
                  <b>{c.name}</b>
                </figure>
              );
            })}
          </div>
        </div>
        <footer>Todos os direitos reservados a UOL Comics 2024</footer>
      </div>
    ) : (
      <h4>Comic not found</h4>
    )}
  </main>
  );
}
