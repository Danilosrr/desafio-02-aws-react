import React, { useState, useEffect, createContext, ReactNode } from "react";
import axios from "axios";
import { Comic } from "../types/comic-type";

interface ComicListContextType {
  comics: Comic[];
  setComics: React.Dispatch<React.SetStateAction<Comic[]>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  handleNew: () => void;
}

export const ComicListContext = createContext<ComicListContextType | null>(
  null,
);

interface ComicContextProps {
  children: ReactNode;
}

const ComicContext: React.FC<ComicContextProps> = ({ children }) => {
  const [comics, setComics] = useState<Comic[]>([]);
  const [error, setError] = useState("");
  const [offset, setOffset] = useState(0);

  const fetchResponse = async (newOffset: number) => {
    const publicKey = process.env.REACT_APP_API_KEY;
    const hash = "73d1299302e594ca3212e73052b13d80"

    try {
      const response = await axios.get(
        "https://gateway.marvel.com/v1/public/comics",
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

      setComics((prevComics) => [...prevComics, ...response.data.data.results]);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
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
      }}
    >
      {children}
    </ComicListContext.Provider>
  );
};

export default ComicContext;
