import './App.css';
import Boton from './componentes/Boton';
import Valores from './componentes/Valores';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import Logo from './componentes/Logo';

function App() {
  // componente principal de la aplicación
  const [input, setInput] = useState('');

  const agregarInput = (val) => {
      setInput(input + val); //la función va a sumar el valor por defecto más el valor ingresado
  };

  const calcularResultado = () => {
      if(input){
        setInput(evaluate(input));
      }else {
        alert('Por favor ingrese valores para realizar los cálculos');
      }
  };

  return (
    <div className="App">
 
      <Logo />
 
      <div className='contenedor-calculadora'>

        <Valores input={input} />

        <div className='fila'>
          <Boton manejarClic={agregarInput} >1</Boton>
          <Boton manejarClic={agregarInput} >2</Boton>
          <Boton manejarClic={agregarInput} >3</Boton>
          <Boton manejarClic={agregarInput} >+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput} >4</Boton>
          <Boton manejarClic={agregarInput} >5</Boton>
          <Boton manejarClic={agregarInput} >6</Boton>
          <Boton manejarClic={agregarInput} >-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput} >7</Boton>
          <Boton manejarClic={agregarInput} >8</Boton>
          <Boton manejarClic={agregarInput} >9</Boton>
          <Boton manejarClic={agregarInput} >*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado} >=</Boton>
          <Boton manejarClic={agregarInput} >0</Boton>
          <Boton manejarClic={agregarInput} >.</Boton>
          <Boton manejarClic={agregarInput} >/</Boton>
        </div>
        <div className='fila'>
            <BotonClear manejarClear = {()=> setInput('') } >Clear</BotonClear>
        </div>
      </div>

    </div>
  );
}

export default App;


/*
definir la función y pasarla con el valor de props:
<Boton manejarClic={agregarInput} >1</Boton>

definir la función anónima directamente en:
<BotonClear manejarClear = {()=> setInput('') } >Clear</BotonClear>


con:
props.children
crear componentes con etiquetas de apertura y cierre
que representa props.children
instalación de paquete o librería externa en el terminal y se agrega en package.json
*/