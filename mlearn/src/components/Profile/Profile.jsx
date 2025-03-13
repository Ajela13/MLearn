import "./Profile.css";
import Header from "../Header/Header";
import PostList from "../PostList/PostList";
import { usePostStore } from "../../Store/UsePostStore";

function Profile() {
  const {
    postData,
    visibleCount,
    increaseVisibleCount,
    userId,
    activeTab,
    setActiveTab,
  } = usePostStore();

  const filteredPosts =
    activeTab === "saved"
      ? postData.filter((post) => post.savedBy?.includes(userId))
      : postData.filter((post) => post.createdBy === userId);
  console.log(filteredPosts);
  return (
    <section className="profile">
      <div className="profile__content">
        <Header />
        <h1 className="profile__title">Username you have 5 saved articles</h1>
        <h2 className="profile__subtitle">
          by keywords: supervise, unsupervise
        </h2>
        <div className="profile__btns">
          <button
            className={`profile__btn ${activeTab === "saved" ? "active" : ""}`}
            onClick={() => setActiveTab("saved")}
          >
            Saved articles
          </button>
          <button
            className={`profile__btn ${
              activeTab === "created" ? "active" : ""
            }`}
            onClick={() => setActiveTab("created")}
          >
            Created articles
          </button>
        </div>
        <div className="profile__results">
          <PostList posts={filteredPosts.slice(0, visibleCount)} />
          {filteredPosts.length > 3 && visibleCount < filteredPosts.length && (
            <button
              className="profile__show-btn"
              onClick={increaseVisibleCount}
            >
              Show more
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Profile;
