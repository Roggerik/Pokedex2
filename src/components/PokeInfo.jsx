import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import axios from 'axios';

import "../styles/PokeInfo.css";
import IconPeso from "../assets/Icons/Varios/IconPeso.svg";
import IconAltura from "../assets/Icons/Varios/IconAltura.svg";
import IconCategoria from "../assets/Icons/Varios/IconCategoria.svg";
import IconHabilidades from '../assets/Icons/Varios/IconHabilidades.svg'
import IconArrow from '../assets/Icons/Varios/Arrow.svg'

import CampoDetails from "./CampoDetails";


function PokeInfo() { 

  const idPage = useParams()
  console.log("eligio: ",idPage.id)

  const navigate = useNavigate();
  const [newUrl, setNewUrl] = useState(`https://pokeapi.co/api/v2/pokemon/${idPage.id}`);
  const [pokeModal, setPokeModal] = useState("")
  const [imagenModal, setImagenModal] = useState("")
  const [hpPokemon, setHpPokemon]= useState("")
  const [ability, setAbility]=useState("")
  const[newId, setNewId]=useState("")
  const[colorFondo, setColorFondo]=useState("")
  
  const handleClickPrevius = ()=>{
    navigate(-1);
  }
  
  const pokeFuncion = async () => {
    try {
      const res = await axios.get(newUrl);
      
      setNewId(res.data.id.toLocaleString(undefined, { minimumIntegerDigits: 3 }));
      setPokeModal(res.data)
      setImagenModal(res.data.sprites.other.home.front_default)
      setColorFondo(res.data.types[0].type.name)
      setAbility(res.data.abilities[0].ability.name)
      setHpPokemon(res.data.stats[0].base_stat)
      return (
        pokeModal, imagenModal, newId,colorFondo
      )
      
    
    } catch (error) {
      console.error('Error al obtener los Pokémon:', error);
    } finally {

    }
  };
  useEffect(() => {
    pokeFuncion();
    
  }, [newUrl]);

  

  return (
    <>
    <div className={`ContainerModal Container${colorFondo}`}>
        <div className="BtnHeader" onClick={handleClickPrevius}>
          <img className="BtnArrowPrevius"src={IconArrow} alt="" />
        </div>
        <header className={`ContainerHeader ContainerHeader${colorFondo}`}>
          <div className={`ContainerImagenInfo ContainerImagenInfo${colorFondo}`}> {/*muestra el color redondo segun el tipo de pokemon */}
            <div className={`ContainerIconModal ModalIcon${colorFondo}`}>
            </div>
            <img src={imagenModal} alt="" className="ImagenModal" />
          </div>
        </header>

        <main className="MainModal ">
          <section className="datosModal">
            <span className="nameModal">{pokeModal.name}</span>
            <p className="IdModal">N° {newId}</p>
            

          </section>

          <section className="detailsModal">
            <section>
              <CampoDetails Icono={IconPeso} Titulo="Peso" Cantidad={pokeModal.weight / 10} Medida="Kg"/>
              <CampoDetails Icono={IconAltura} Titulo="Altura" Cantidad={pokeModal.height/10} Medida="m"/>
            </section>

            <section>
              <CampoDetails Icono={IconCategoria} Titulo="Hp" Cantidad={hpPokemon} Medida="HP"/>
              <CampoDetails Icono={IconHabilidades} Titulo="Habilidades" Cantidad={ability} Medida=""/>
            </section>
          </section>

          
        </main>
        
      

      </div> 
    
    
    </>
  );
  //{`containerIconTipo IconTipo${tipo.type.name}`}
}


export default PokeInfo;



/*
 */