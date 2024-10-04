import useComicListContext from "../../Hooks/useComicListContext";
import "../../Pages/pagStyles/loadingComic.css";
function LoaadingScreen() {
  const { loading } = useComicListContext();
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
