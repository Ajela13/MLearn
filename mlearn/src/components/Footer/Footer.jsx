import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyrigth">
        © 2024 Alejandra Mariño, Powered by OpenML API
      </p>
      <a
        className="footer__link"
        target="_blank"
        href="https://github.com/Ajela13/MLearn"
      >
        <p className="footer__social">github</p>
      </a>
    </footer>
  );
}
export default Footer;
