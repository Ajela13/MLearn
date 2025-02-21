import "./PostCard.css";
import photo from "../../assets/background.png";
import { ModalContext } from "../../contexts/ModalContext";
import { useContext } from "react";
import { usePost } from "../../contexts/PostContext";
import SafeHtmlContent from "../SafeHtmlContent/SafeHtmlContent";

function PostCard() {
  const { handleCardClick } = useContext(ModalContext);
  const { postData } = usePost();
  console.log(postData.post);

  const onCardClick = () => {
    handleCardClick();
  };
  return (
    <li className="card" onClick={onCardClick}>
      <div className="card__header">
        <p className="card__date">Card Date</p>
        <h2 className="card__name">{postData.title}</h2>
        <div className="card__description">
          <SafeHtmlContent html={postData.post} />
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
