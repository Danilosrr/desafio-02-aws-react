import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Importando `useNavigate` aqui
import { RxChevronLeft } from "react-icons/rx";
import { request } from "../../Api/api";
import loading from "../../Assets/loading.gif";
//import "./CharacterDetails.css";

interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: { extension: string; path: string };
  stories: { items: { name: string; resourceURI: string }[] };
  series: { items: { name: string; resourceURI: string }[] };
  modified: string;
}

interface Comic {
  id: number;
  title: string;
  thumbnail: { extension: string; path: string };
}

export default function CharacterDetails() {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [noCharacter, setNoCharacter] = useState<boolean>(false);
  const [character, setCharacter] = useState<Character | null>(null);
  const [characterComics, setCharacterComics] = useState<Comic[]>([]);
  const [moreComics, setMoreComics] = useState<Comic[]>([]);

  async function getData() {
    try {
      const characterData = await request(`/v1/public/characters/${id}`);
      const comicsData = await request(
        `/v1/public/characters/${id}/comics?limit=3`
      );

     
      const additionalComicsData = await request(`/v1/public/comics?limit=20`);

      setCharacter(characterData.data.results[0] as Character);
      setCharacterComics(comicsData.data.results.map((c: Comic) => c));
      setMoreComics(additionalComicsData.data.results.map((c: Comic) => c));
    } catch (error) {
      setNoCharacter(true);
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const handleBackButton = () => {
    navigate(-1); 
  };

  return (
    <>
      <main className="main">
        {character ? (
          <div className="container">
            <nav>
              <RxChevronLeft
                color="#FF8100"
                onClick={handleBackButton}
                style={{ cursor: "pointer" }}
              />
              <a
                href="/characters"
                style={{ textDecoration: "none" }}
                onClick={handleBackButton}
              >
                Voltar
              </a>
            </nav>
            <div className="character">
              <img
                className="cover"
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt="character cover"
              />
              <aside className="character-info">
                <h2>{character.name.toUpperCase()}</h2>
                <div className="character-details">
                  <p>
                    <strong>Criado em:</strong>
                    {new Date(character.modified).getFullYear()}
                  </p>
                  <p>
                    <strong>Histórias:</strong> {character.stories.items.length}
                  </p>
                  <p>
                    <strong>Núm. de séries:</strong>{" "}
                    {character.series.items.length}
                  </p>
                </div>
                <p>
                  <strong>Descrição:</strong><br />{" "}
                  {character.description || "No description available."}
                </p>
              </aside>
            </div>

            {/* Seção Histórias */}
            <div className="relatedComics">
              <h3>Histórias</h3>
              {characterComics.length > 0 ? (
                <div className="comics-grid">
                  {characterComics.map((comic) => (
                    <figure className="thumbnail" key={comic.id}>
                      <a href={`/comics/${comic.id}`}>
                        <img
                          src={`${comic.thumbnail.path}/portrait_medium.${comic.thumbnail.extension}`}
                          alt={comic.title}
                        />
                        <b>{comic.title}</b>
                      </a>
                    </figure>
                  ))}
                </div>
              ) : (
                <p>Nenhuma história encontrada.</p>
              )}
            </div>

            {/* Seção Mais Obras */}
            <div className="more-comics">
              <h3>Mais Obras</h3>
              <div className="comics-scroll-container">
                {moreComics.map((comic) => (
                  <figure className="thumbnail" key={comic.id}>
                    <a href={`/comics/${comic.id}`}>
                      <img
                        src={`${comic.thumbnail.path}/portrait_medium.${comic.thumbnail.extension}`}
                        alt={comic.title}
                      />
                      <b>{comic.title}</b>
                    </a>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="loader">
            {noCharacter ? (
              <h4>Personagem não encontrado</h4>
            ) : (
              <img src={loading} alt="loading" />
            )}
          </div>
        )}
      </main>
      <footer>Todos os direitos reservados a UOL Comics 2024</footer>
    </>
  );
}
