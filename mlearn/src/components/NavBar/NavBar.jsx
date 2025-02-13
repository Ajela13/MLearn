import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <ul className="navbar__links">
        <li className="navbar__link">Add post</li>
        <li className="navbar__link">Profile</li>
      </ul>
      <div className="navbar__auth">
        <button className="navbar__SignIn">Sign in</button>
      </div>
    </div>
  );
}

export default NavBar;
