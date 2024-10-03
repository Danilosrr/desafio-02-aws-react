import { useMemo } from "react";
import useComicListContext from "../../Hooks/useComicListContext";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";

const ComicList: React.FC = () => {
  const navigate = useNavigate();

  function handleClick(id:number) {
    navigate(`/comics/${id}`);
  }

  const { comics, error, handleNew } = useComicListContext();
  const money = useMemo(() => (Math.random() * (5 - 1) + 1).toFixed(2), []);
  

  return (
    <div>
      <Header />
      <div className="">
        {/*tela de loading a fazer */}
        <div className="comic-body">
          {error && <p>Error: {error}</p>}
          {comics.map((comic) => (
            <div className="comic-Content" key={comic.id} onClick={()=>{handleClick(comic.id)}}>
              <img
                src={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`}
                alt=""
              />
              <p className="tittle">
                {comic.title.split(" (")[0].trim()}{" "}
                {comic.title.match(/#\d+/)?.[0]}
              </p>
              <p className="money">
                ${" "}
                {comic.prices[0]["price"] !== 0
                  ? comic.prices[0]["price"]
                  : money}
              </p>
              <div className="Productor-Date">
                <p>
                  {comic.creators.items.length > 0
                    ? `${comic.creators.items[0].name}`
                    : "Alan Turnig"}
                </p>
                <p>
                  {comic.title.match(/\((\d{4})\)/)?.[1]
                    ? comic.title.match(/\((\d{4})\)/)?.[1]
                    : "1999"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="button-div">
        <button
          onClick={(e) => {
            e.preventDefault();
            handleNew();
          }}
          className="button-List"
        >
          + Carregar mais
        </button>
      </div>
    </div>
  );
};

export default ComicList;
