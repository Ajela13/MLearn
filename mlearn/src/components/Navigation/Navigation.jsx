import "./Navigation.css";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons
import { Link } from "react-router-dom";
import { useTextColorStore } from "../../Store/UseTextColorStore";
import { useModalStore } from "../../Store/UseModalStore";
import { useAuthStore } from "../../Store/UseAuthStore";

function Navigation() {
  const { textColor } = useTextColorStore();
  const { handleAddClick, handleLoginClick, menuOpen, setMenuOpen } =
    useModalStore();
  const { isLoggedIn, logout } = useAuthStore();
  if (isLoggedIn) {
    return (
      <nav className="navbar">
        <button
          className="navbar__menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        <ul className={`navbar__links ${menuOpen ? "navbar__open" : ""}`}>
          <li className="navbar__link" onClick={handleAddClick}>
            Add post
          </li>
          <Link to="/profile" className="navbar__link-no-style-link">
            <li className="navbar__link" onClick={() => setMenuOpen(!menuOpen)}>
              Profile
            </li>
          </Link>
          <Link to="/tasks" className="navbar__link-no-style-link">
            <li className="navbar__link" onClick={() => setMenuOpen(!menuOpen)}>
              Tasks
            </li>
          </Link>
          <div className="navbar__auth">
            <button
              className="navbar__Sign"
              style={{ borderColor: textColor }}
              onClick={() => {
                logout();
                setMenuOpen(false);
              }}
            >
              Sign Out
            </button>
          </div>
        </ul>
      </nav>
    );
  }
  return (
    <nav className="navbar">
      <button
        className="navbar__menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      <ul className={`navbar__links ${menuOpen ? "navbar__open" : ""}`}>
        <Link to="/tasks" className="navbar__link-no-style-link">
          <li className="navbar__link" onClick={() => setMenuOpen(!menuOpen)}>
            Tasks
          </li>
        </Link>
        <div className="navbar__auth">
          <button
            className="navbar__Sign"
            style={{ borderColor: textColor }}
            onClick={handleLoginClick}
          >
            Sign in
          </button>
        </div>
      </ul>
    </nav>
  );
}

export default Navigation;
