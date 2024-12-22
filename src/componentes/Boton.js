import React from "react";
import '../hoja-estilo/Boton.css'
//clase de javaScript
//template literals ``
//definir un operador

function Boton(props){

    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };

    return (
        <div 
            className={`boton-contenedor ${esOperador(props.children) ? 'operador': '' }` .trimEnd()}
            onClick={()=> props.manejarClic(props.children)} > 
            {props.children}
        </div>
    );
}

export default Boton;

/*
event listener onclick
función anónima: ()=> props.manejarClic(props.children)
onClick={()=> props.manejarClic(props.children)} > 
una función que llama a otra función.
*/