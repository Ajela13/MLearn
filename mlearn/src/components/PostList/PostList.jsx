import "./PostList.css";
import PostCard from "../PostCard/PostCard";
import { usePostStore } from "../../Store/UsePostStore";

function PostList({ posts }) {
  const { activeTab } = usePostStore();
  return (
    <div className="postList">
      {Array.isArray(posts) && posts.length > 0 ? (
        <div className="postList__list">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="postList__empty">
          {activeTab === "saved"
            ? "Looks like there's nothing saved yet."
            : activeTab === "created"
            ? "Looks like there's no post created by you!"
            : "Looks like there's nothing here yet. Be the first to add a post!"}
        </p>
      )}
    </div>
  );
}

export default PostList;
