import useCharacterListContext from "../../Hooks/useCharacterListContext";
import "../../Pages/pagStyles/loadingComic.css";
function LoaadingScreen() {
  const {loading} = useCharacterListContext();
  console.log(loading);
  return (
    <div className="loading">
      <div>
        <p>carregando...</p>
      </div>
    </div>
  );
}

export default LoaadingScreen;
