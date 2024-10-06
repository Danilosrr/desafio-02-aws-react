import { Link, useLocation, useNavigate } from "react-router-dom";
import { RxExit,RxHamburgerMenu } from "react-icons/rx";
import { BsCart3 } from "react-icons/bs";
import logo from "../../Assets/UOL.png";
import "./Header.css";
import SearchBar from "./SearchBar";
import { useCar } from "../Checkout/CheckoutLogic";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("userData");
    navigate('/');
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
        <MobileButtons/>
      </section>
      <SearchBar  url={verifyUrl()} />
      <DesktopButtons url={verifyUrl()} logout={handleLogout}/>
    </header>
  );
}

function DesktopButtons({ url,logout }: Readonly<{ url: string,logout:()=>void }>) {
  const {carItems} = useCar()

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
        {carItems.length ? <div className="dot" /> : <></>}
        <BsCart3 />
      </div>
      <button onClick={logout}>
        <RxExit />
        Sair
      </button>
    </section>
  );
}

function MobileButtons() {
  const {carItems} = useCar()

  return (
    <section className="mobileButtons">
      <div className="cartIcon">
        {carItems.length ? <div className="dot" /> : <></>}
        <BsCart3 />
      </div>
      <RxHamburgerMenu />
    </section>
  );
}
