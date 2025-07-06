import { Link } from 'react-router-dom';
import './GameCard.css';

const GameCard = ({ title, description, slug, image }) => {
  return (
    <Link to={`/game/${slug}`} className="game-card-link">
      <div className="game-card">
        {image && (
          <div className="game-card-image">
            <img src={image} alt={title} />
          </div>
        )}
        <div className="game-card-content">
          <h3 className="game-card-title">{title}</h3>
          <p className="game-card-description">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default GameCard; 