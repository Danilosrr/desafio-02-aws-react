import React from "react";
import ComicList from "../Components/ComicList/ComicList";
import ComicContext from "../Contexts/ComicListContext";
import "./pagStyles/comicList.css"


const ComicHome: React.FC = () => {
  return (
    <ComicContext>
      <ComicList />
    </ComicContext>
  );
};

export default ComicHome;
