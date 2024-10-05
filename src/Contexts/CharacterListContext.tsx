import React, { useState, useEffect, createContext, ReactNode } from "react";
import axios, { AxiosResponse } from "axios";
import { Character } from "../types/character-types";
import { useSearchParams } from "react-router-dom";

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
  const [searchParams, setSearchParams] = useSearchParams();
  const [character, setCharacter] = useState<Character[]>([]);
  const [error, setError] = useState("");
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchResponse = async (newOffset: number) => {
    const nameStartsWith = searchParams.get("nameStartsWith");
    const publicKey = process.env.REACT_APP_API_KEY;
    const hash = process.env.REACT_APP_API_HASH;

    const params = {
      apikey: publicKey,
      ts: 1,
      hash: hash,
      offset: newOffset,
      limit: 20,
    };

    try {
      let response: AxiosResponse<any, any>;
      if (nameStartsWith) {
        response = await axios.get(
          "https://gateway.marvel.com//v1/public/characters",
          { params: { ...params, nameStartsWith } }
        );
      } else {
        response = await axios.get(
          "https://gateway.marvel.com//v1/public/characters",
          { params: { ...params } }
        );
      }
      
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
