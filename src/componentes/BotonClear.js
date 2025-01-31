import React  from "react";
import Boton from "./Boton";
import '../hoja-estilo/BotonClear.css';

const BotonClear = (props) => (
    <div 
        className='boton-clear' 
        onClick={props.manejarClear}
        >
        {props.children}
    </div>
);

export default BotonClear;
