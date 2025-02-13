import "./Header.css";
import NavBar from "../NavBar/NavBar";
import logo from "../../assets/mlearnLogo.svg";

function Header() {
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <img className="header__logo" src={logo} alt="logo" />
          <p className="header__title">MLearn</p>
        </div>
        <NavBar />
      </div>
    </div>
  );
}

export default Header;
