import "./Header.css";
import NavBar from "../NavBar/NavBar";
import logo from "../../assets/mlearnLogo.svg";
import { useTextColor } from "../../contexts/TextColorContext";

function Header() {
  const textColor = useTextColor();
  return (
    <header className="header" style={{ color: textColor }}>
      <div className="header__content">
        <div className="header__logo-container">
          <img className="header__logo" src={logo} alt="logo" />
          <p className="header__title">MLearn</p>
        </div>
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
