import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { RxChevronLeft } from "react-icons/rx";
import { MdAddShoppingCart } from "react-icons/md";
import { request } from "../../Api/api";
import loader from "../../Assets/loading.gif";
import { Character } from "../../types/character-types";
import { Comic } from "../../types/comic-type";
import "./ComicDetails.css";
import { useCar } from "../Checkout/CheckoutLogic";

interface Details {
  comic: Comic | null;
  comics: Comic[];
  characters: Character[];
  character: Character | null;
  characterComics: Comic[];
}

const initialState = {
  comic: null,
  comics: [],
  character: null,
  characters: [],
  characterComics: [],
}

export default function ComicDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const {addItem} = useCar();
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(0)
  const [details, setDetails] = useState<Details>(initialState);

  function handleNavigate() {
    navigate("./../");
  }

  function redirect(url: string) {
    setLoading(true)
    navigate(url);
    setRefresh(refresh+1);
    console.log(refresh)
  }

  function handleBuy(now?: boolean) {
    if (details.comic){
      const {id,title,prices,images} = details.comic
      const item = {
        id,
        title,
        price: prices[0].price, 
        image:images[0].path+images[0].extension,
        quantity: 1
      }
      addItem(item);
      if (now) navigate("/checkout");
    }
  }

  async function getData() {
    try {
      if(location.pathname.includes("comics")){
        const comic = await request(`/v1/public/comics/${id}`);
        const comics = await request(`/v1/public/comics?limit=20`);
        const characters = await request(
          `/v1/public/comics/${id}/characters?limit=3`
        );

        console.log(characters)
        const data = {
          ...initialState,
          comic: comic.data.results[0],
          comics: comics.data.results,
          characters: characters.data.results,
        };
        setDetails(data);
      }
      if(location.pathname.includes("characters")){
        const character = await request(`/v1/public/characters/${id}`);
        const comics = await request(`/v1/public/comics?limit=20`);
        const characterComics =await request(
          `/v1/public/characters/${id}/comics?limit=3`
        )

        const data = {
          ...initialState,
          character: character.data.results[0],
          comics: comics.data.results,
          characterComics: characterComics.data.results,
        };
        setDetails(data);
      }
    } catch (error) {
      console.log(error);
    } finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    console.log('refresh')
    getData();
  }, [refresh]);

  if (!loading) {
    const comicCover = details.comic?.images.length ? `${details.comic.images[0].path}.${details.comic.images[0].extension}`:`${details.comic?.thumbnail.path}/portrait_uncanny.${details.comic?.thumbnail.extension}`
    const characterCover = `${details.character?.thumbnail.path}/portrait_incredible.${details.character?.thumbnail.extension}`

    return (
      <main className="mainDetails">
        {details.comic || details.character ? (
          <div className="container">
            <nav onClick={handleNavigate}>
              <RxChevronLeft color="#FF8100" />
              Voltar
            </nav>
            <div className="comic">
              <img
                className={details.comic?"cover":"coverBorder"}
                src={details.comic?comicCover:characterCover}
                alt="comic cover"
              />
              <aside>
                <section className="title">
                  <h2>{details.comic?details.comic.title:details.character?.name}</h2>
                  {details.comic?<p>{"$ "+details.comic.prices[0].price}</p>:<></>}
                </section>
                <div className="details">
                  {details.comic?<ComicRows comic={details.comic}/>:<></>}
                  {details.character?<CharacterRows character={details.character}/>:<></>}
                  <article className="thumbnails">
                  {details.comic?<>
                      <h3>Personagens da obra</h3>
                      <div className="row">
                        {details.characters?details.characters.map((c) => {
                          return <div key={c.id} onClick={()=>{redirect(`/characters/${c.id}`)}}>
                            <Thumbnail name={c.name} img={c.thumbnail} format="standard_medium" round/>
                          </div>
                        }):<p>Nenhum Personagem</p>}
                      </div>
                    </>:
                    <>
                      <h3>Histórias</h3>
                      <div className="row">
                        {details.characterComics.map((c) => {
                          return <div key={c.id} onClick={()=>{redirect(`/comics/${c.id}`)}}>
                            <Thumbnail name={c.title} img={c.thumbnail} format="portrait_medium" round={false}/>
                          </div>
                        })}
                      </div>
                    </>
                  }
                  </article>
                </div>
                {details.comic?
                  <section className="buttons">
                    <button className="secondary" onClick={() => handleBuy()}>
                      <MdAddShoppingCart />
                      Adicionar ao carrinho
                    </button>
                    <button className="primary" onClick={() => handleBuy(true)}>
                      Comprar agora
                    </button>
                  </section>
                :<></>}
              </aside>
            </div>
            <div className="moreComics">
              <h3>Mais Obras</h3>
              <div className="row">
                {details.comics?.map((c) => {
                  return (
                    <div key={c.id} onClick={()=>{redirect(`/comics/${c.id}`)}}>
                      <figure className="thumbnail">
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
                    </div>
                  );
                })}
              </div>
              <footer>Todos os direitos reservados a UOL Comics 2024</footer>
            </div>
          </div>
        ) : (
          <div className="loader">
            <h4>Information not found</h4>
          </div>
        )}
      </main>
    );
  } else {
    return (
      <main className="mainDetails">
        <div className="loader">
          <img src={loader} alt="loading" />
        </div>
      </main>
    );
  }
}

function Thumbnail({ name,img,format,round }: Readonly<{ name: string,img:{path:string, extension:string},format:string, round:boolean }>) {
  return (
    <figure className="character" key={name}>
      <img src={img.path +`/${format}.`+img.extension} alt="thumbnail" className={round?'round':''}/>
      <b>{name}</b>
    </figure>
  )
}

function ComicRows({ comic }: Readonly<{ comic: Comic }>) {
  return (
    <>
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
      <article >
        <h3>Série</h3>
        <p>{comic.series.name}</p>
      </article>
    </>
  );
}

function CharacterRows({ character }: Readonly<{ character: Character }>) {
  return (
    <>
      <div className="mergedRow">
        <article>
          <h3>Criado em</h3>
          <p>{new Date(character.modified).getFullYear()}</p>
        </article>
        <article>
          <h3>Histórias</h3>
          <p>{character.stories.items.length}</p>
        </article>
        <article>
          <h3>núm. de séries</h3>
          <p>{character.series.items.length}</p>
        </article>
      </div>
      <article className="extendRow">
        <h3>Descrição</h3>
        <p>{character.description || "No description available."}</p>
      </article>
    </>
  );
}