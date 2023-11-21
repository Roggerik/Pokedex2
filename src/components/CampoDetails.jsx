import { useState } from "react";

export default function CampoDetails({Icono,Titulo,Cantidad, Medida}) {
    
  
  return (
    <div className="GrupoDatos">
      <div className="tituloGrupoDatos">
        <img src={Icono} alt="" />
        <p> {Titulo}</p>
      </div>
      <div className="Cantidad">
        <span>{Cantidad} {Medida}</span>
      </div>
    </div>
  );
}
