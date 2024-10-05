import React, { useState, useEffect, createContext, ReactNode } from "react";
import axios, { AxiosResponse } from "axios";
import { Comic } from "../types/comic-type";
import { useSearchParams } from "react-router-dom";

interface ComicListContextType {
  comics: Comic[];
  setComics: React.Dispatch<React.SetStateAction<Comic[]>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  handleNew: () => void;
  loading: boolean;
}

export const ComicListContext = createContext<ComicListContextType | null>(
  null
);

interface ComicContextProps {
  children: ReactNode;
}

const ComicContext: React.FC<ComicContextProps> = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [comics, setComics] = useState<Comic[]>([]);
  const [error, setError] = useState("");
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchResponse = async (newOffset: number) => {
    const titleStartsWith = searchParams.get("titleStartsWith");
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
      if (titleStartsWith) {
        response = await axios.get(
          "https://gateway.marvel.com/v1/public/comics",
          { params: { ...params, titleStartsWith } }
        );
      } else {
        response = await axios.get(
          "https://gateway.marvel.com/v1/public/comics",
          { params: { ...params } }
        );
      }

      setComics((prevComics) => [...prevComics, ...response.data.data.results]);
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
    <ComicListContext.Provider
      value={{
        comics,
        setComics,
        error,
        setError,
        offset,
        setOffset,
        handleNew,
        loading,
      }}
    >
      {children}
    </ComicListContext.Provider>
  );
};

export default ComicContext;
