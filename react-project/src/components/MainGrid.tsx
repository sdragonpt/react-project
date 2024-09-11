import { FaHeart } from 'react-icons/fa';

const games = [
    { id: 1, name: 'The Witcher 3', platforms: ['PC', 'PS4'], image: '/images/thewitcher.jpeg' },
    { id: 2, name: 'Halo Infinite', platforms: ['Xbox', 'PC'], image: '/images/haloinfinite.jpg' },
    { id: 3, name: 'Cyberpunk 2077', platforms: ['PC', 'PS5'], image: '/images/cyberpunk.jpg' },
    { id: 4, name: 'Red Dead Redemption 2', platforms: ['PC', 'PS4', 'Xbox'], image: '/images/rdr2.jpg' },
    { id: 5, name: 'Assassin\'s Creed Valhalla', platforms: ['PC', 'PS5', 'Xbox'], image: '/images/assassinscreedvalhalla.jpg' },
    { id: 6, name: 'Doom Eternal', platforms: ['PC', 'PS4', 'Xbox'], image: '/images/doometernal.jpg' },
    { id: 7, name: 'Minecraft', platforms: ['PC', 'PS4', 'Xbox', 'Switch'], image: '/images/minecraft.jpg' },
    { id: 8, name: 'Animal Crossing: New Horizons', platforms: ['Switch'], image: '/images/animalcrossing.jpeg' },
    { id: 9, name: 'Hades', platforms: ['PC', 'Switch'], image: '/images/hades.jpg' },
    { id: 10, name: 'Overwatch', platforms: ['PC', 'PS4', 'Xbox'], image: '/images/overwatch.png' },
    { id: 11, name: 'The Legend of Zelda: Breath of the Wild', platforms: ['Switch'], image: '/images/zelda.jpg' },
    { id: 12, name: 'God of War', platforms: ['PS4', 'PS5'], image: '/images/godofwar.png' },
    { id: 13, name: 'Bloodborne', platforms: ['PS4'], image: '/images/bloodborne.jpg' },
    { id: 14, name: 'Sekiro: Shadows Die Twice', platforms: ['PC', 'PS4', 'Xbox'], image: '/images/sekiro.jpg' },
    { id: 15, name: 'Fortnite', platforms: ['PC', 'PS4', 'Xbox', 'Switch'], image: '/images/fortnite.jpg' },
    { id: 16, name: 'Apex Legends', platforms: ['PC', 'PS4', 'Xbox'], image: '/images/apexlegends.jpg' },
    { id: 17, name: 'Call of Duty: Warzone', platforms: ['PC', 'PS4', 'Xbox'], image: '/images/warzone.jpg' },
    { id: 18, name: 'Valorant', platforms: ['PC'], image: '/images/valorant.jpg' },
    { id: 19, name: 'Genshin Impact', platforms: ['PC', 'PS4', 'Switch'], image: '/images/genshinimpact.jpg' },
    { id: 20, name: 'Hollow Knight', platforms: ['PC', 'PS4', 'Switch'], image: '/images/hollowknight.jpg' },
    { id: 21, name: 'Stardew Valley', platforms: ['PC', 'PS4', 'Xbox', 'Switch'], image: '/images/stardewvalley.jpg' },
    { id: 22, name: 'Celeste', platforms: ['PC', 'PS4', 'Switch'], image: '/images/celeste.jpg' },
    { id: 23, name: 'Undertale', platforms: ['PC', 'PS4', 'Switch'], image: '/images/undertale.jpg' },
    { id: 24, name: 'Journey', platforms: ['PS4', 'PC'], image: '/images/journey.jpg' },
    { id: 25, name: 'Control', platforms: ['PC', 'PS4', 'Xbox'], image: '/images/control.jpg' },
    { id: 26, name: 'Subnautica', platforms: ['PC', 'PS4', 'Xbox'], image: '/images/subnautica.jpg' },
    { id: 27, name: 'Cuphead', platforms: ['PC', 'PS4', 'Xbox', 'Switch'], image: '/images/cuphead.jpg' },
    { id: 28, name: 'No Man\'s Sky', platforms: ['PC', 'PS4', 'Xbox'], image: '/images/nomanssky.jpg' },
    { id: 29, name: 'Divinity: Original Sin 2', platforms: ['PC', 'PS4', 'Xbox', 'Switch'], image: '/images/divinity.jpg' },
    { id: 30, name: 'The Outer Worlds', platforms: ['PC', 'PS4', 'Xbox'], image: '/images/theouterworlds.jpg' }
  ];
  

const MainGrid: React.FC = () => {
  return (
    <div className="main-grid">
      <h1 className="mt-4">Games</h1>

      {/* Order by and Platforms */}
      <div className="d-flex justify-content-between align-items-center my-3">
        <div>
          <label className="me-2">Order by:</label>
          <select className="form-select d-inline-block w-auto">
            <option>Popularity</option>
            <option>Release Date</option>
          </select>
        </div>
        <div>
          <label className="me-2">Platforms:</label>
          <select className="form-select d-inline-block w-auto">
            <option>All</option>
            <option>PC</option>
            <option>Xbox</option>
          </select>
        </div>
      </div>

      {/* Game Grid */}
      <div className="row">
        {games.map(game => (
          <div key={game.id} className="col-md-3 mb-4">
            <div className="card h-100">
              <img src={game.image} alt={game.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{game.name}</h5>
                <p className="card-text">Available on: {game.platforms.join(', ')}</p>
                <button className="btn btn-secondary btn-like">
                  <FaHeart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainGrid;

