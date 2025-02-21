import "./NavBar.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useTextColor } from "../../contexts/TextColorContext";
import { ModalContext } from "../../contexts/ModalContext";

function NavBar() {
  const textColor = useTextColor();
  const { handleAddClick, handleLoginClick } = useContext(ModalContext);
  return (
    <div className="navbar">
      <ul className="navbar__links">
        <li className="navbar__link" onClick={handleAddClick}>
          Add post
        </li>
        <Link to="/profile" className="navbar__link-no-style-link">
          <li className="navbar__link">Profile</li>
        </Link>
        <Link to="/tasks" className="navbar__link-no-style-link">
          <li className="navbar__link">Tasks</li>
        </Link>
      </ul>
      <div className="navbar__auth">
        <button
          className="navbar__SignIn"
          style={{ borderColor: textColor }}
          onClick={handleLoginClick}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default NavBar;
