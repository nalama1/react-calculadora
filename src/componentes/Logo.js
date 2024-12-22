import React from "react";
import cursoLogo from '../imagenes/curso-logo.png';

//componente como una función flecha
const Logo = (props) => (
    <div className='curso-logo-contenedor'>
        <img 
          src={cursoLogo}
          className='curso-logo'
          alt='Logo de Curso'
        />
    </div>
);

// function Logo (props) {
//     return (
//         <div className='curso-logo-contenedor'>
//          <img 
//            src={cursoLogo}
//            className='curso-logo'
//            alt='Logo de Curso'
//          />
//      </div>
//     );
// };

export default Logo;

/*
1. componente funcional clásico:
function Logo(props){ return (); };

2. componente funcional, moderno, función flecha
const Logo = (props) => ();
*/
