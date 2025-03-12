import "./Profile.css";
import Header from "../Header/Header";
import PostList from "../PostList/PostList";

function Profile() {
  return (
    <section className="profile">
      <div className="profile__content">
        <Header />
        <h1 className="profile__title">Username you have 5 saved articles</h1>
        <h2 className="profile__subtitle">
          by keywords: supervise, unsupervise
        </h2>
        <div className="profile__btns">
          <button className="profile__btn">Saved articles</button>
          <button className="profile__btn">Created articles</button>
        </div>
        <div className="profile__results">
          <PostList />
          <button className="profile__show-btn">Show more</button>{" "}
        </div>
      </div>
    </section>
  );
}

export default Profile;
