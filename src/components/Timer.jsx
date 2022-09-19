import React, { useState, useEffect } from 'react';

// dans le cas ici je l'ai mis en cont en haut
// l'autre étape serait d'avoir un temps par défaut comme j'ai fait, mais qu'une props puisse 
// override le temps max par défaut
const TIMER_LIMIT = 45;

const Timer = (props) => {
  
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    
    // bon j'initialise interval pour prendre la valeur de retour de setInterval afin de le clear tantôt
    let interval = null;

    interval = setInterval(() => {
        // chaque secondes j'ajoute une seconde
        setSeconds(seconds => seconds + 1);
    }, 1000);

    // au moment de retirer la composante du DOM, retire le timer pour pas détruire la ram
    return () => {
      clearInterval(interval)
    };
    //[] en param ci-bas pour que ça arreve rien qu'une fois!
  },[]);

  // chaque fois que seconds est changé faire....
  useEffect(() => {
    //ai-je atteind la limite de secondes?
    if(seconds >= TIMER_LIMIT){
      //oui? ben on trigger le changement de route
      // ce qui va enlever la composante donc 
      // retirer l'intervale au passage!
      props.goHome();  
    }
    
  },[seconds])

  return (
    <div className="app">
      <div className="time">
        {seconds}s
      </div>
    </div>
  );
};

export default Timer;