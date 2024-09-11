import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true); // Inicialmente dark mode

  useEffect(() => {
    // Definir a classe inicial do body
    document.body.classList.add('bg-dark', 'text-white');
  }, []);

  const toggleTheme = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      if (newMode) {
        document.body.classList.add('bg-dark', 'text-white');
        document.body.classList.remove('bg-light', 'text-dark');
      } else {
        document.body.classList.add('bg-light', 'text-dark');
        document.body.classList.remove('bg-dark', 'text-white');
      }
      return newMode;
    });
  };

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} w-100`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">GameLibrary</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex ms-auto">
            <input className="form-control me-2" type="search" placeholder="Search" />
            <button className="btn btn-outline-primary" type="button" onClick={toggleTheme}>
              {darkMode ? '🌞' : '🌙'}
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
