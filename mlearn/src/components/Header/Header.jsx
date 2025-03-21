import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/mlearnNoBack.svg";
import { useTextColorStore } from "../../Store/UseTextColorStore";
import Navigation from "../Navigation/Navigation";
function Header() {
  const { textColor } = useTextColorStore();
  return (
    <header className="header" style={{ color: textColor }}>
      <div className="header__content">
        <Link to="/" className="header__link header__link_no-style-link">
          <div className="header__logo-container">
            <img className="header__logo" src={logo} alt="logo" />
            <p className="header__title">MLearn</p>
          </div>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
