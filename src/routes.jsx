
import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router";
import { useNavigate } from "react-router-dom";

import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import GlobalTimer from './components/GlobalTimer'

// on prends des props parce que c'est le parent qui regarde le onClick!
const Router = (props) => {
  
  const navigate = useNavigate();
    
  // si jamais y'a un soucis avec la variable parent, j'initialize à zéro
  const [activeId, setActiveId] = useState(props.active||0);

  // go home sans params ne rafraichis pas la page, il rentre juste à la maison
  function goHome(refresh) {
    navigate("/home");

    //si provient de globalTRimer (seul composante qui appelle go home avec ce param)
    if(refresh){
      //ben on raffraichit avec un vidage de cache au passage
      window.location.reload(false);
    }
  }

  // si les props sont changés
  useEffect(() => {
    //et que c'est au niveau d'active
    if(activeId !== props.active){
      //ben change le id de active pour la valeur des props
      setActiveId(props.active)
      // DONC le timer global sera remis à zéro
    }

  });

  return (
    <>
      <Routes>
        <Route path={"/products"} element={<Products goHome={goHome}/>} />
        <Route path={"/about"} element={<About goHome={goHome}/>} />
        <Route path="/contact" element={<Contact goHome={goHome}/>}/>
        <Route path="/home" element={<Home />}/>
        <Route path="" element={<Home />}/>
      </Routes>
      <GlobalTimer
        goHome={goHome}
        active={props.active}
      />
    </>
  );
}

export default Router;