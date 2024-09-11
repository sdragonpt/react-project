interface Game {
  id: number;
  name: string;
  platforms: string[];
}

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <div className="game-card">
      <h3>{game.name}</h3>
      <p>Available on: {game.platforms.join(", ")}</p>
      <button>Like ❤️</button>
    </div>
  );
};

export default GameCard;
