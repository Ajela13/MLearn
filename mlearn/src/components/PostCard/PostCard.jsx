import "./PostCard.css";
import photo from "../../assets/background.png";

function PostCard() {
  return (
    <li className="card">
      <div className="card__header">
        <img className="card__image" src={photo} alt="image" />
        <p className="card__date">Card Date</p>
        <h2 className="card__name">Card Title</h2>
        <p className="card__description">
          Card Description tryui iu gbhnju g hyu guyb gvbuh gyuh igyubhu gyu b
          Card Description tryui iu gbhnju g hyu guyb gvbuh gyuh igyubhu gyu b
          Card Description tryui iu gbhnju g hyu guyb gvbuh gyuh igyubhu gyu b
          Card Description tryui iu gbhnju g hyu guyb gvbuh gyuh igyubhu gyu b
          Card Description tryui iu gbhnju g hyu guyb gvbuh gyuh igyubhu gyu b
          Card Description tryui iu gbhnju g hyu guyb gvbuh gyuh igyubhu gyu b
          Card Description tryui iu gbhnju g hyu guyb gvbuh gyuh igyubhu gyu b
          Card Description tryui iu gbhnju g hyu guyb gvbuh gyuh igyubhu gyu b
          Card Description tryui iu gbhnju g hyu guyb gvbuh gyuh igyubhu gyu b
        </p>
        <button className="card__save-btn"></button>
      </div>
      <div className="card__footer">
        <p className="card__author">Card Author</p>
      </div>
    </li>
  );
}

export default PostCard;
