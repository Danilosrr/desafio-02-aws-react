import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RxChevronLeft } from "react-icons/rx";
import { MdAddShoppingCart } from "react-icons/md";
import { request } from "../../Api/api";
import loading from "../../Assets/loading.gif";
import "./ComicDetails.css";

interface Comic {
  id: number;
  name?:string;
  title: string;
  issueNumber: number;
  characters: { items: { name: string; resourceURI: string } };
  description: string;
  pageCount: number;
  thumbnail: { extension: string; path: string };
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
  const [noComic, setNoComic] = useState<boolean>(false);
  const [comic, setComic] = useState<Comic | null>(null);
  const [comics, setComics] = useState<Comic[] | null>(null);
  const [characters, setCharacters] = useState<Character[]>([]);

  async function getData() {
    try {
      const comic = await request(`/v1/public/comics/${id}`);
      const comics = await request(`/v1/public/comics?limit=20`);
      const characters = await request(`/v1/public/comics/${id}/characters?limit=3`);
       
      setComic(comic.data.results[0] as Comic);
      setComics(comics.data.results as Comic[]);
      setCharacters(characters.data.results as Character[]);
      console.log(comic.data.results[0],comics.data.results,characters.data.results);
      return
    } catch (error) {
      setNoComic(true);
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

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
                  <div className="row">
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
                  </div>
                </article>
              </div>
              <section className="buttons">
                <button className="secondary" ><MdAddShoppingCart/>Adicionar ao carrinho</button>
                <button className="primary">Comprar agora</button>
              </section>
            </aside>
          </div>
          <div className="moreComics">
            <h3>Mais Obras</h3>
            <div className="row">
              {comics?.map((c) => {
                return (
                  <figure className="thumbnail" key={c.id}>
                    <img
                      src={
                        c.thumbnail.path +
                        "/portrait_medium" +
                        "." +
                        c.thumbnail.extension
                      }
                      alt={c.title}
                    />
                    <b>{c.title}</b>
                  </figure>
                );
              })}
            </div>
          </div>
          <footer>Todos os direitos reservados a UOL Comics 2024</footer>
        </div>
      ) : (
        <div className="loader">
          {noComic ? <h4>Comic not found</h4>:<img src={loading} alt="loading" />}
        </div>
      )}
    </main>
  );
}
