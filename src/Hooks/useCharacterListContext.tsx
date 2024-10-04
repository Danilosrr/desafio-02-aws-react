import { useContext } from "react";
import { CharacterListContext } from "../Contexts/CharacterListContext";

// Hook para acessar o contexto (character)
function useCharacterListContext() {
  const context = useContext(CharacterListContext);
  if (context === null) {
    throw new Error(
      "useCharacterListContext deve ser usado dentro de um CharacterListProvider",
    );
  }
  return context;
}

export default useCharacterListContext;
