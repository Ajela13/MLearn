import "./PostCard.css";
import { useModalStore } from "../../Store/UseModalStore";
import { usePostStore } from "../../Store/UsePostStore";
import SafeHtmlContent from "../SafeHtmlContent/SafeHtmlContent";
import { useAuthStore } from "../../Store/UseAuthStore";

function PostCard({ post }) {
  const { isLoggedIn, currentUser } = useAuthStore();
  if (!post || !post.title || !post.post) {
    return null;
  }

  const { handleCardClick } = useModalStore();
  const { toggleSavePost } = usePostStore();
  const isSaved = post.savedBy.includes(currentUser.id);

  const onCardClick = () => {
    handleCardClick();
  };
  return (
    <li className="card">
      <button
        className={`card__save-btn ${isSaved ? "card__save-btn-active" : ""}`}
        onClick={() => toggleSavePost(post.id, currentUser.id)}
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
