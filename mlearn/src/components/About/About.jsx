import "./About.css";
import logo from "../../assets/mlearnLogo.svg";
function About() {
  return (
    <section className="about">
      <img className="about__image" src={logo} alt="logo" />
      <div className="about__content">
        <h2 className="about__title">About</h2>
        <p className="about__description">
          This blog is a collection of theory, code snippets, and visuals to
          deepen your understanding of machine learning. The content is divided
          into categories, such as supervised learning, unsupervised learning,
          and reinforcement learning. Each post is tagged with relevant topics
          and algorithms, and you can search for posts by title.
        </p>
      </div>
    </section>
  );
}
export default About;
