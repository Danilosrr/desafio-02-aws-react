import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxExit, RxMagnifyingGlass,RxHamburgerMenu } from "react-icons/rx";
import { BsCart3 } from "react-icons/bs";
import logo from "../../Assets/UOL.png";
import "./Header.css";

export default function Header() {
  const location = useLocation();

  function verifyUrl() {
    if (location.pathname.includes("comic")) return "comic";
    else return "character";
  }

  return (
    <header className="header">
      <section className="logo">
        <img src={logo} alt="uol logo" />
        <h1>
          <b>UOL</b>Comics
        </h1>
        <MobileButtons />
      </section>
      <SearchBar />
      <DesktopButtons url={verifyUrl()} />
    </header>
  );
}

function DesktopButtons({ url }: Readonly<{ url: string }>) {
  return (
    <section className="headerButtons">
      <Link className={url == "comic" ? "link active" : "link"} to="/comics">
        Quadrinhos
      </Link>
      <Link
        className={url == "character" ? "link active" : "link"}
        to="/characters"
      >
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
  );
}

function MobileButtons() {
  return (
    <section className="mobileButtons">
      <div className="cartIcon">
        {true ? <div className="dot" /> : <></> /*alterar depois*/}
        <BsCart3 />
      </div>
      <RxHamburgerMenu />
    </section>
  );
}

function SearchBar() {
  const searchInput = useRef<HTMLInputElement>(null);

  function handleBarClick() {
    searchInput.current?.focus();
    //a concluir
  }

  function handleSearch(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    //a concluir
  }

  return (
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
  );
}
