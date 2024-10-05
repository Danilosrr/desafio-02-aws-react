import { Link, useLocation, useNavigate } from "react-router-dom";
import { RxExit, RxHamburgerMenu } from "react-icons/rx";
import { BsCart3 } from "react-icons/bs";
import logo from "../../Assets/UOL.png";
import "./Header.css";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useCar } from "../Checkout/CheckoutLogic";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const [clickMenu, setClickMenu] = useState(false);

  function handleLogout() {
    localStorage.removeItem("userData");
    navigate('/');
  }

  function clickMenuMobile() {
    setClickMenu((prevState) => !prevState);
  }

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
        <MobileButtons clickMenuMobile={clickMenuMobile} />
      </section>
      <SearchBar url={verifyUrl()} />
      <DesktopButtons
        clickMenu={clickMenu}
        url={verifyUrl()}
        logout={handleLogout}
      />
    </header>
  );
}

function DesktopButtons({
  url,
  logout,
  clickMenu,
}: Readonly<{ url: string; logout: () => void; clickMenu: boolean }>) {
  const { carItems } = useCar();

  return (
    <section>
      <section className="headerButtons">
        <Link
          className={url === "comics" ? "link active" : "link"}
          to="/comics"
        >
          Quadrinhos
        </Link>
        <Link
          className={url === "characters" ? "link active" : "link"}
          to="/characters"
        >
          Personagens
        </Link>
        <div className="cartIcon">
          {carItems.length ? <div className="dot" /> : <></>}
          <BsCart3 />
        </div>
        <button onClick={logout}>
          <RxExit />
          Sair
        </button>
      </section>

      {/* Mobile */}
      {clickMenu && (
        <section className="headerButtons-mobile">
          <Link
            className={url === "comics" ? "link active" : "link"}
            to="/comics"
          >
            Quadrinhos
          </Link>
          <Link
            className={url === "characters" ? "link active" : "link"}
            to="/characters"
          >
            Personagens
          </Link>
          <button onClick={logout}>
            <RxExit />
            Sair
          </button>
        </section>
      )}
    </section>
  );
}
function MobileButtons({ clickMenuMobile }: { clickMenuMobile: () => void }) {
  const { carItems } = useCar();


  return (
    <section className="mobileButtons">
      <div className="cartIcon">
        {carItems.length ? <div className="dot" /> : <></>}
        <BsCart3 />
      </div>
      <RxHamburgerMenu onClick={clickMenuMobile} />
    </section>
  );
}
