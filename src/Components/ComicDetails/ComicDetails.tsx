import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RxChevronLeft } from "react-icons/rx";
import { request } from "../../Api/api";
import "./ComicDetails.css";

interface Comic {
  id: number;
  title: string;
  issueNumber: number;
  characters: { items: { name: string; resourceURI: string } };
  description: string;
  pageCount: number;
  images: { extension: string; path: string }[];
  prices: { price: number; type: string }[];
  series: { name: string; resourceURL: string };
  creators: { items: { name: string; resourceURI: string; role: string }[] };
  dates: { type: string; date: string }[];
}

interface Character {
  name: string;
  thumbnail: { extension: string; path: string };
}

export default function ComicDetails() {
  const { id } = useParams();
  const [comic, setComic] = useState<Comic | null>(null);
  const [characters, setCharacters] = useState<Character[]>([]);

  async function getData() {
    try {
      const { data } = await request(`/v1/public/comics/${id}`);
      const characters = await request(`/v1/public/comics/${id}/characters`);
      setComic(data.results[0]);
      console.log(characters.data.results[0]);
      setCharacters(characters.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  });

  return (
    <main className="main">
      {comic ? (
        <div className="container">
          <nav>
            <RxChevronLeft color="#FF8100" />
            Voltar
          </nav>
          <div className="comic">
            <img
              className="cover"
              src={comic.images[0].path + "." + comic.images[0].extension}
              alt="comic cover"
            />
            <aside>
              <section className="title">
                <h2>{comic.title}</h2>
                <p>{"$ " + comic.prices[0].price}</p>
              </section>
              <div className="details">
                <article>
                  <h3>Publicado em</h3>
                  <p>{comic.dates[0].date.slice(0, 4)}</p>
                </article>
                <article>
                  <h3>Núm. de Páginas</h3>
                  <p>{comic.pageCount}</p>
                </article>
                <article>
                  <h3>Autor</h3>
                  <p>{comic.creators.items[0]?.name}</p>
                </article>
                <article>
                  <h3>Série</h3>
                  <p>{comic.series?.name}</p>
                </article>
                <article className="characters">
                  <h3>Personagens da obra</h3>
                  {characters.map((c) => {
                    return (
                      <figure className="character" key={c.name}>
                        <img
                          src={
                            c.thumbnail.path +
                            "/standard_medium" +
                            "." +
                            c.thumbnail.extension
                          }
                          alt="character"
                        />
                        <b>{c.name}</b>
                      </figure>
                    );
                  })}
                </article>
              </div>
              <section className="buttons">
                <button>Adicionar ao carrinho</button>
                <button>Comprar agora</button>
              </section>
            </aside>
          </div>
          <footer>Todos os direitos reservados a UOL Comics 2024</footer>
        </div>
      ) : (
        <h4>Comic not found</h4>
      )}
    </main>
  );
}
