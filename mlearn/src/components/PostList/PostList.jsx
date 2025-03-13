import "./PostList.css";
import PostCard from "../PostCard/PostCard";
import { usePostStore } from "../../Store/UsePostStore";

function PostList({ posts }) {
  const { activetab } = usePostStore();
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
          {activetab == "created"
            ? "Looks like there's nothing here yet. Be the first to add a post!"
            : "Looks like there's nothing saved yet."}
        </p>
      )}
    </div>
  );
}

export default PostList;
