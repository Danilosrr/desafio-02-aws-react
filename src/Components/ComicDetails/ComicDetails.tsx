import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useCartContext from "../../Hooks/useCartContext";
import { RxChevronLeft } from "react-icons/rx";
import { MdAddShoppingCart } from "react-icons/md";
import { request } from "../../Api/api";
import loading from "../../Assets/loading.gif";
import { Comic } from "../../types/comic-type";
import "./ComicDetails.css";

interface Character {
  name: string;
  thumbnail: { extension: string; path: string };
}

export default function ComicDetails() {
  const { id } = useParams();
  const {addToCart} = useCartContext()
  const navigate = useNavigate();
  const [noComic, setNoComic] = useState<boolean>(false);
  const [comic, setComic] = useState<Comic | null>(null);
  const [comics, setComics] = useState<Comic[] | null>(null);
  const [characters, setCharacters] = useState<Character[]>([]);


  function handleNavigate() {
    navigate(`/comics`);
  }

  function handleBuy(now?:boolean){
    if (comic) addToCart(comic);
    if(now) navigate('/checkout');
  }

  async function getData() {
    try {
      const comic = await request(`/v1/public/comics/${id}`);
      const comics = await request(`/v1/public/comics?limit=20`);
      const characters = await request(`/v1/public/comics/${id}/characters?limit=3`);
       
      setComic(comic.data.results[0] as Comic);
      setComics(comics.data.results as Comic[]);
      setCharacters(characters.data.results as Character[]);
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
    <main className="mainDetails">
      {comic ? (
        <div className="container">
          <nav onClick={handleNavigate}>
            <RxChevronLeft color="#FF8100"/>
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
                <button className="secondary" onClick={()=>handleBuy()}><MdAddShoppingCart/>Adicionar ao carrinho</button>
                <button className="primary" onClick={()=>handleBuy(true)}>Comprar agora</button>
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
            <footer>Todos os direitos reservados a UOL Comics 2024</footer>
          </div>
        </div>
      ) : (
        <div className="loader">
          {noComic ? <h4>Comic not found</h4>:<img src={loading} alt="loading" />}
        </div>
      )}
    </main>
  );
}
