import "./PostList.css";
import PostCard from "../PostCard/PostCard";
import { usePostStore } from "../../Store/UsePostStore";

function PostList() {
  const { postData } = usePostStore();
  return (
    <div className="postList">
      {Array.isArray(postData) && postData.length > 0 ? (
        <div className="postList__list">
          {postData.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
}

export default PostList;
