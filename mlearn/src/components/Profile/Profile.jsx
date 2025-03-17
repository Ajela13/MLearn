import "./Profile.css";
import Header from "../Header/Header";
import PostList from "../PostList/PostList";
import { usePostStore } from "../../Store/UsePostStore";
import { useAuthStore } from "../../Store/UseAuthStore";

function Profile() {
  const { currentUser } = useAuthStore();
  const {
    postData,
    visibleCountSaved,
    visibleCountCreated,
    increaseVisibleCountSaved,
    increaseVisibleCountCreated,
    activeTab,
    setActiveTab,
  } = usePostStore();
  console.log(visibleCountCreated, visibleCountSaved);
  const filteredPosts =
    activeTab === "saved"
      ? postData.filter((post) => post.savedBy?.includes(currentUser.id))
      : postData.filter((post) => post.createdBy === currentUser.id);
  console.log(filteredPosts);
  return (
    <section className="profile">
      <div className="profile__content">
        <Header />
        <h1 className="profile__title">
          {currentUser.name} you have {filteredPosts.length} {activeTab}{" "}
          articles
        </h1>
        <div className="profile__btns">
          <button
            className={`profile__btn ${
              activeTab === "saved" ? "profile__btn-active" : ""
            }`}
            onClick={() => setActiveTab("saved")}
          >
            Saved articles
          </button>
          <button
            className={`profile__btn ${
              activeTab === "created" ? "profile__btn-active" : ""
            }`}
            onClick={() => setActiveTab("created")}
          >
            Created articles
          </button>
        </div>
        <div className="profile__results">
          <PostList
            posts={filteredPosts.slice(
              0,
              activeTab === "saved" ? visibleCountSaved : visibleCountCreated
            )}
          />
          {filteredPosts.length > 3 &&
            (activeTab === "saved" ? visibleCountSaved : visibleCountCreated) <
              filteredPosts.length && (
              <button
                className="profile__show-btn"
                onClick={
                  activeTab == "saved"
                    ? increaseVisibleCountSaved
                    : increaseVisibleCountCreated
                }
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
