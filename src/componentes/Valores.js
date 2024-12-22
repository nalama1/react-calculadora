import React from 'react';
import '../hoja-estilo/Valores.css';

//definir el componente como una función flecha
//desestructuración sin usar el props
const Valores = ({ input }) => (
    <div className='input'>
        {input}
    </div>
);

export default Valores;
