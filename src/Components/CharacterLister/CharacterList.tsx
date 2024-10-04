import useCharacterListContext from "../../Hooks/useCharacterListContext"; 
import Header from "../Header/Header";
import { Link } from 'react-router-dom';
//import './CharacterList.css';


const CharacterList: React.FC = () => {
  const { character, error, handleNew } = useCharacterListContext();
  

 

  return (
      <div>
        <Header />
      <div className="">
        {/*tela de loading a fazer */}
        <div className="character-body">
          {error && <p>Error: {error}</p>}
          {character.map((character) => (
            <div className="character-Content" key={character.id}>
               <Link to={`/characters/${character.id}`} style={{ textDecoration: 'none' }}>
               <img
                src={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`}
                alt=""
              />
              <div className="line"></div>
              <p className="tittle">
                {character.name} 
              </p>
              
            </Link>
              
             
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

export default CharacterList;
