import "./PostList.css";
import PostCard from "../PostCard/PostCard";
import { usePostStore } from "../../Store/UsePostStore";

function PostList({ posts }) {
  const { activeTab } = usePostStore();
  return (
    <div className="postList">
      {Array.isArray(posts) && posts.length > 0 ? (
        <ul className="postList__list">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </ul>
      ) : (
        <p className="postList__empty">
          {location.pathname === "/"
            ? "Looks like there's nothing here yet. Be the first to add a post!"
            : activeTab === "saved"
            ? "Looks like there's nothing saved yet."
            : activeTab === "created"
            ? "Looks like there's no post created by you!"
            : "No posts found"}
        </p>
      )}
    </div>
  );
}

export default PostList;
