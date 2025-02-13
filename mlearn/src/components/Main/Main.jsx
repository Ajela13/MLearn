import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import PostCard from "../PostCard/PostCard";
import About from "../About/About";
import "./Main.css";

function Main() {
  return (
    <main className="main">
      <div className="main__overlay"></div>
      <div className="main__content">
        <Header />
        <h1 className="main__title">Explore the world of ML</h1>
        <h2 className="main__subtitle">
          Theory, code snippets, and visuals to deepen your ML understanding
        </h2>
        <SearchForm />
        <div className="main__results">
          <h2 className="main__results-title">Search results</h2>
          <ul className="main__list">
            <PostCard />
          </ul>
          <button className="main__show-btn">Show more</button>
        </div>
        <About />
      </div>
    </main>
  );
}

export default Main;
