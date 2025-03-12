import "./PostCard.css";
import { useModalStore } from "../../Store/UseModalStore";
import SafeHtmlContent from "../SafeHtmlContent/SafeHtmlContent";

function PostCard({ post }) {
  if (!post || !post.title || !post.post) {
    return null; // No renderiza nada si el post es inválido
  }

  const { handleCardClick } = useModalStore();

  const onCardClick = () => {
    handleCardClick();
  };
  return (
    <li className="card" onClick={onCardClick}>
      <div className="card__header">
        <p className="card__date">Card Date</p>
        <h2 className="card__title">{post.title}</h2>
        <div className="card__description">
          <SafeHtmlContent html={post.post} />
        </div>
        <button className="card__save-btn"></button>
      </div>
      <div className="card__footer">
        <p className="card__author">Card Author</p>
      </div>
    </li>
  );
}

export default PostCard;
