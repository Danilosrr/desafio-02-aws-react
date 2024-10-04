import React from "react";
import CharacterList from "../Components/CharacterLister/CharacterList";
import CharacterContext from "../Contexts/CharacterListContext";



const CharacterHome: React.FC = () => {
  return (
    <CharacterContext>
      <CharacterList/>
    </CharacterContext>
  );
};

export default CharacterHome;
