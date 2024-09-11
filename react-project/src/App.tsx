import React from 'react';
import Navbar from './components/Navbar';
import SidePanel from './components/SidePanel';
import MainGrid from './components/MainGrid';
import './App.css'; // Caso tenha estilos personalizados
import './light-mode.css';
import './dark-mode.css';


const App: React.FC = () => {
  return (
    <div className="app">
      {/* Navigation Bar no topo */}
      <Navbar />

      {/* Layout principal com SidePanel e MainGrid */}
      <div className="container-fluid">
        <div className="row">
          {/* Side Panel - Mantém na coluna à esquerda */}
          <div className="col-md-2 p-0">
            <SidePanel />
          </div>

          {/* Main Grid - Área principal */}
          <div className="col-md-10">
            <MainGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
