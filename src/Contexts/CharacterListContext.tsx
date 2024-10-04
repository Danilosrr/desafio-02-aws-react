import React, { useState, useEffect, createContext, ReactNode } from "react";
import axios from "axios";
import { Character } from "../types/character-types";

interface CharacterListContextType {
  character: Character[];
  setCharacter: React.Dispatch<React.SetStateAction<Character[]>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  handleNew: () => void;
  loading: boolean;
}

export const CharacterListContext = createContext<CharacterListContextType | null>(
  null,
);

interface CharacterContextProps {
  children: ReactNode;
}

const CharacterContext: React.FC<CharacterContextProps> = ({ children }) => {
  const [character, setCharacter] = useState<Character[]>([]);
  const [error, setError] = useState("");
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchResponse = async (newOffset: number) => {
    const publicKey = process.env.REACT_APP_API_KEY;
    const hash = "73d1299302e594ca3212e73052b13d80"

    try {
      const response = await axios.get(
        "https://gateway.marvel.com//v1/public/characters",
        {
          params: {
            apikey: publicKey,
            ts: 3,
            hash: hash,
            offset: newOffset,
            limit: 20,
            
          },
        },
      );

      setCharacter((prevCharacter) => [...prevCharacter, ...response.data.data.results]);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResponse(0);
  }, []);

  const handleNew = () => {
    const newOffset = offset + 20;
    setOffset(newOffset);
    fetchResponse(newOffset);
  };

  return (
    <CharacterListContext.Provider
      value={{
        character,
        setCharacter,
        error,
        setError,
        offset,
        setOffset,
        handleNew,
        loading,
      }}
    >
      {children}
    </CharacterListContext.Provider>
  );
};

export default CharacterContext;