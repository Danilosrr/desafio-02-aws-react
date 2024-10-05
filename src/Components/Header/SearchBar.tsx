import { useRef, useState } from "react";
import useComicListContext from "../../Hooks/useComicListContext";
import { RxMagnifyingGlass } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { request } from "../../Api/api";
import useCharacterListContext from "../../Hooks/useCharacterListContext";

export default function SearchBar({ url }: Readonly<{ url: string }>) {
  const navigate = useNavigate();
  const { setComics } = useComicListContext();
  const { setCharacter } = useCharacterListContext();
  const [loading, setLoading] = useState(false);
  const searchInput = useRef<HTMLInputElement>(null);

  function handleEnterPress(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  }

  async function handleSearch(e: React.MouseEvent | React.KeyboardEvent) {
    e.stopPropagation();
    setLoading(true);
    const queryValid = searchInput.current?.value && searchInput.current.value.length >= 3
    try {
      if (queryValid && url==='comics') {
        const searchData = await request(
          `/v1/public/comics?titleStartsWith=${searchInput.current?.value}&limit=20`
        );
        setComics(searchData.data.results);
        navigate(`/comics?titleStartsWith=${searchInput.current.value}`);
      }
      if (queryValid && url==='characters') {
        const searchData = await request(
          `/v1/public/characters?nameStartsWith=${searchInput.current?.value}&limit=20`
        );
        setCharacter(searchData.data.results);
        navigate(`/characters?nameStartsWith=${searchInput.current.value}`);
      }
    } catch (error) {
      console.log(error);
    } finally { 
        setLoading(false)
    }
  }

  return (
    <section
      className="searchBar"
      onClick={() => {searchInput.current?.focus();}}
    >
      <button onClick={handleSearch} disabled={loading}>
        <RxMagnifyingGlass />
      </button>
      <input
        onKeyDown={handleEnterPress}
        ref={searchInput}
        type="text"
        placeholder="Digite aqui por título..."
      />
    </section>
  );
}
