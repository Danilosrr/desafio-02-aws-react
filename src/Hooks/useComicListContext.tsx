import { useContext } from "react";
import { ComicListContext } from "../Contexts/ComicListContext";

// Hook para acessar o contexto (comiclist)
function useComicListContext() {
  const context = useContext(ComicListContext);
  if (context === null) {
    throw new Error(
      "useComicListContext deve ser usado dentro de um ComicListProvider",
    );
  }
  return context;
}

export default useComicListContext;
