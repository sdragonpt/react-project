const genres = [
    { id: 1, name: 'Action', image: '/images/action.jpg' },
    { id: 2, name: 'Adventure', image: '/images/adventure.jpg' },
    { id: 3, name: 'RPG', image: '/images/rpg.jpg' },
    { id: 4, name: 'Shooter', image: '/images/shooter.jpg' },
    { id: 5, name: 'Strategy', image: '/images/strategy.jpg' },
    { id: 6, name: 'Simulation', image: '/images/simulation.jpg' },
    { id: 7, name: 'Puzzle', image: '/images/puzzle.jpg' },
    { id: 8, name: 'Racing', image: '/images/racing.jpg' },
    { id: 9, name: 'Fighting', image: '/images/fighting.jpg' },
    { id: 10, name: 'Survival', image: '/images/survival.jpg' }
  ];
  
  
  const SidePanel: React.FC = () => {
    return (
      <div className="list-group">
        {genres.map(genre => (
          <a href="#" key={genre.id} className="list-group-item list-group-item-action">
            {genre.name}
          </a>
        ))}
      </div>
    );
  };
  
  export default SidePanel;
  