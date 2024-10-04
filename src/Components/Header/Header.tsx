import { Link, useLocation } from "react-router-dom";
import { RxExit,RxHamburgerMenu } from "react-icons/rx";
import { BsCart3 } from "react-icons/bs";
import logo from "../../Assets/UOL.png";
import "./Header.css";
import SearchBar from "./SearchBar";

export default function Header() {
  const location = useLocation();

  function verifyUrl() {
    if (location.pathname.includes("comic")) return "comics";
    else return "characters";
  }

  return (
    <header className="header">
      <section className="logo">
        <img src={logo} alt="uol logo" />
        <h1>
          <b>UOL</b>Comics
        </h1>
        <MobileButtons/>
      </section>
      <SearchBar  url={verifyUrl()} />
      <DesktopButtons url={verifyUrl()} />
    </header>
  );
}

function DesktopButtons({ url }: Readonly<{ url: string }>) {
  return (
    <section className="headerButtons">
      <Link className={url === "comics" ? "link active" : "link"} to="/comics">
        Quadrinhos
      </Link>
      <Link
        className={url === "characters" ? "link active" : "link"}
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
