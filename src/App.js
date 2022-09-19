
import React, { useState } from 'react';

import './App.css';
import Router from './routes.jsx';
import Menu from './components/Menu.jsx';
import MENU from './data/menu.jsx'

// composante parente
//je met ici un evenement onClick sur l'application au complet;
// en effet, je considère que cliquer dans le beurre compte pour une interaction.
// plus tard d'ailleurs ce sera sans doutes le cas

function App() {

  const [active, setActive] = useState(0);
  
  return (
    <div
      className="App" 
      //on click global
      onClick={() => {
        // je préfère additionner que faire des toggle, ça réduit les mauvaises expériences
        // quand react propage 2 fois le même événement par exemple
        // bref, un réflexe né par des traumatismes, plus de détails dans la composante globaltimer 
        setActive(active+1)
      }}>
      <Menu menu={MENU} />
      <Router active={active} />
    </div>
  );
}

export default App;
