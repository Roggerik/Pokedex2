import "../styles/CardPokemon.css";
import PokeInfo from "../components/PokeInfo";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CardPokemon({ id, name, imagen, tipo, tiposPokemon }) {
    
  const [new_id] = useState(id.toLocaleString(undefined, { minimumIntegerDigits: 3 }));
  const tipoEncontrado = tiposPokemon.map(item=>{
      return(
        <div className={`ContainerIconTipo IconTipo${item.type.name}`}>
          <div className={`iconTipo IconTipo${item.type.name}`}></div>
          <p className="nameTipo">{item.type.name}</p>
          </div>
      )
      
    })
    const handleModal = () => {
      return (
        <>
          <PokeInfo />
        </>
      );
    };
  return (
    <>
      <div className="ContainerCard">
      <Link to={`/${id}`}>
        <div className={`ContainerCardPokemon Container${tipo}`} onClick={handleModal}>
          <div className="ContainerCardDatos">
            <p className="IdPokemon">N° {new_id}</p>
            <p className="NombrePokemon">{name}</p>
            <div className="tipoPokemon">{tipoEncontrado}</div>
          </div>


            <div className={`ContainerCardImagen ${tipo}`}>
              <img className="ImgPokemon" src={imagen} alt="" />
            </div>
          </div>
        </Link>
      </div>
      
    </>
  );
}
