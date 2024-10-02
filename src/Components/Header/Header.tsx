import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxExit, RxMagnifyingGlass } from "react-icons/rx";
import { BsCart3 } from "react-icons/bs";
import logo from "../../Assets/UOL.png";
import "./Header.css";

export default function Header() {
  const searchInput = useRef<HTMLInputElement>(null);
  const location = useLocation();

  function verifyUrl(value: string):string {
    if (location.pathname.includes(value)) {
      return "active";
    } else return "inactive";
  }

  function handleBarClick() {
    searchInput.current?.focus();
    //a concluir
  }

  function handleSearch(e: React.MouseEvent<HTMLButtonElement>) {
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
        <input
          ref={searchInput}
          type="text"
          placeholder="Digite aqui por título..."
        />
      </section>
      <section className="headerButtons">
        <Link className={`link ${verifyUrl('comic')}`} to="/">
          Quadrinhos
        </Link>
        <Link className={`link ${verifyUrl('characters')}`} to="/">
          Personagens
        </Link>
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
