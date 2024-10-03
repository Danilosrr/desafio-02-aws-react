import LoaadingScreen from "../Components/ComicList/LoaadingScreen";
import React from "react";
import ComicList from "../Components/ComicList/ComicList";
import ComicContext from "../Contexts/ComicListContext";
import "./pagStyles/comicList.css";
import useComicListContext from "../Hooks/useComicListContext";

const ComicHome: React.FC = () => {
  return (
    <ComicContext>
      <ComicContent />
    </ComicContext>
  );
};

const ComicContent: React.FC = () => {
  const { loading } = useComicListContext();
  return <>{loading ? <LoaadingScreen /> : <ComicList />}</>;
};

export default ComicHome;
