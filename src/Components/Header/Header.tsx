import { useRef } from "react";
import { Link } from "react-router-dom";
import { RxExit, RxMagnifyingGlass } from "react-icons/rx";
import { BsCart3 } from "react-icons/bs";
import logo from "../../Assets/UOL.png";
import "./Header.css";

export default function Header() {
  const searchInput = useRef<HTMLInputElement>(null);

  function handleBarClick() {
    searchInput.current?.focus();
    //a concluir
  }

  function handleSearch(e:React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();  
    //a concluir  
  }

  return (
    <header className="header">
      <section className="logo">
        <img src={logo} alt="uol logo" />
        <h1>
          <b>UOL</b>Comics
        </h1>
      </section>
      <section className="searchBar" onClick={handleBarClick}>
        <button onClick={handleSearch}>
          <RxMagnifyingGlass />
        </button>
        <input ref={searchInput} type="text" placeholder="Digite aqui por título..." />
      </section>
      <section className="headerButtons">
        <Link className="link" to="/">Quadrinhos</Link>
        <Link className="link" to="/">Personagens</Link>
        <div className="cartIcon">
          {true ? <div className="dot" /> : <></> /*alterar depois*/}
          <BsCart3 />
        </div>
        <button>
          <RxExit />
          Sair
        </button>
      </section>
    </header>
  );
}
