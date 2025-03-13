import "./PostCard.css";
import { useModalStore } from "../../Store/UseModalStore";
import { usePostStore } from "../../Store/UsePostStore";
import SafeHtmlContent from "../SafeHtmlContent/SafeHtmlContent";
import { useAuthStore } from "../../Store/UseAuthStore";

function PostCard({ post }) {
  const { isLoggedIn } = useAuthStore();
  if (!post || !post.title || !post.post) {
    return null;
  }

  const { handleCardClick } = useModalStore();
  const { toggleSavePost, userId } = usePostStore();
  const isSaved = post.savedBy.includes(userId);

  const onCardClick = () => {
    handleCardClick();
  };
  return (
    <li className="card">
      <button
        className={`card__save-btn ${isSaved ? "saved" : ""}`}
        onClick={() => toggleSavePost(post.id, userId)}
        hidden={!isLoggedIn}
      ></button>
      <div className="card__header" onClick={onCardClick}>
        <p className="card__date">{post.date}</p>
        <h2 className="card__title">{post.title}</h2>
        <div className="card__description">
          <SafeHtmlContent html={post.post} />
        </div>
      </div>
      <div className="card__footer">
        <p className="card__author">Card Author</p>
      </div>
    </li>
  );
}

export default PostCard;
