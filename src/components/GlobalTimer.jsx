import React, { useState, useEffect } from 'react';

const TIMER_LIMIT = 120;

const GlobalTimer = (props) => {
  
  const [seconds, setSeconds] = useState(0);
  const [activeId, setActiveId] = useState(props.active||0);
  
  // même affaire que le timer local
  useEffect(() => {
    
    let interval = null;

    interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
    }, 1000);

    return () => {
      clearInterval(interval)
    };
  },[]);

  // même affaire que le timer local MAIS on ajoute true à goHome pour annoncer 
  // que l'on désire rafraichir le navigateur sans cache
  useEffect(() => {
    if(seconds >= TIMER_LIMIT){
      //on remet les secondes à zéro pour éviter un bug graphique ;)
      setSeconds(seconds => 0);
      //pis aweille à maison
      props.goHome(true);  
    }
    
  },[seconds])

  // si les props observent un changement
  useEffect(() => {
    //et que c'est au niveau des ids
    if(activeId !== props.active){
      //remet le timer à zéro
      setSeconds(seconds => 0);
      // change l'active pour celui en cours 
      setActiveId(props.active)
    }

  });

  return (
    <div className="app">
      <div className="timeGlobal">
        {seconds}s (global)
      </div>
    </div>
  );
};

export default GlobalTimer;