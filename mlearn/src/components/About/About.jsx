import "./About.css";
import logo from "../../assets/mlearnLogo.jpeg";
function About() {
  return (
    <section className="about">
      <img className="about__image" src={logo} alt="logo" />
      <div className="about__content">
        <h2 className="about__title">About</h2>
        <p className="about__description">
          This platform is designed to help you explore and share insights about
          machine learning. You can create and browse posts that include theory,
          code snippets, and visuals to deepen your understanding of ML
          concepts.
        </p>

        <h3 className="about__subtitle">How to Use MLearn:</h3>
        <div class="about__steps-container">
          <div class="about__step">
            <div class="about__step-number">1</div>
            <div class="about__step-content">
              <h4>Explore Content</h4>
              <p>
                Browse posts covering various ML topics, including algorithms,
                techniques, and practical implementations.
              </p>
            </div>
          </div>

          <div class="about__step">
            <div class="about__step-number">2</div>
            <div class="about__step-content">
              <h4>Search for Posts</h4>
              <p>
                Use the search bar to find specific topics or posts by title.
              </p>
            </div>
          </div>

          <div class="about__step">
            <div class="about__step-number">3</div>
            <div class="about__step-content">
              <h4>Create & Share</h4>
              <p>
                Add your own posts to share knowledge, including text, images,
                and code snippets.
              </p>
            </div>
          </div>

          <div class="about__step">
            <div class="about__step-number">4</div>
            <div class="about__step-content">
              <h4>Interact with Data</h4>
              <p>
                Use the <strong>Tasks</strong> section to explore datasets from
                OpenML and experiment with real-world data.
              </p>
            </div>
          </div>

          <div class="about__step">
            <div class="about__step-number">5</div>
            <div class="about__step-content">
              <h4>Enhance Your Learning</h4>
              <p>
                Read through structured explanations, view visualizations, and
                gain insights from different ML approaches.
              </p>
            </div>
          </div>
        </div>
        <p className="about__footer">
          Start exploring and contributing to the ML community today!{" "}
        </p>
      </div>
    </section>
  );
}
export default About;
