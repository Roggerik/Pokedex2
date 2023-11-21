import React from 'react'
import '../styles/PageFavoritos.css'
import { useState, useEffect } from 'react';
import imgConstruccion from '../assets/Img/Otros/Construccion.jpg'

import SinFavorite from '../assets/Img/SinFavorite.svg'

function Favoritos(){

  const [arrayFavorite, setArrayFavorite]=useState([]);
  const arreglo = JSON.parse(localStorage.getItem('FAVORITO')) || [];
  useEffect(() => {
    
    setArrayFavorite(arreglo);
    console.log("el arreglo es: ",arrayFavorite)
  }, []);

  return (
    <div className='ContainerPageFavoritos'>
      <img className="ImgFavorito" src={imgConstruccion} alt="" />
        

    </div>
  )
}

export default Favoritos;