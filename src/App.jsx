import { useState, useRef } from "react";
import "./App.css";
export default function App() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    // console.log("formData", [...formData])
    //Iterar sobre los datos del formulario
    formData.forEach((value, name) => {
      // console.log("valor", value)
      localStorage.setItem(name, value);
    });
  };

  const [triggerResult, setTriggerResult] = useState(false);
  const inputRef = useRef(null);
  const fomrRef = useRef(null);

  const hacerCalculo = (operacion) => {
    const valorUno = parseFloat(localStorage.getItem("valor1"));
    const valorDos = parseFloat(localStorage.getItem("valor2"));

    let result;
    switch (operacion) {
      case "suma":
        result = valorUno + valorDos;
        break;
      case "resta":
        result = valorUno - valorDos;
        break;
      case "multiplicacion":
        result = valorUno * valorDos;
        break;
      case "division":
        result = valorUno / valorDos;
        break;
      default:
        result = 0;
    }

    localStorage.setItem("result", `${result}`);
    setTriggerResult(!triggerResult);
  };

  const reset = () => {
    localStorage.clear("result");
    localStorage.clear("valor1");
    localStorage.clear("valor2");
    fomrRef.current.reset();
    inputRef.current.focus();
    setTriggerResult(!triggerResult);
  };

  const resultLocalStorage = !isNaN(parseInt(localStorage.getItem("result")))
    ? parseFloat(localStorage.getItem("result")).toFixed(2)
    : "";

  return (
    <>
      <h1>CALCULADORA WEB</h1>

      <div className="bordeExterior">
        <form
          className="calculadora"
          ref={fomrRef}
          id="inputsForm"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label htmlFor="valor1">Valor1</label>
          <input
            autoFocus
            ref={inputRef}
            className="inputValor1"
            name="valor1"
            id="valor1"
            defaultValue={localStorage.getItem("valor1")}
          />

          <label htmlFor="valor2">Valor2</label>
          <input
            className="inputValor2"
            name="valor2"
            id="valor2"
            defaultValue={localStorage.getItem("valor2")}
          />

          <button type="submit">INGRESAR VALOR</button>
        </form>
        <div className="add-subtract">
          <button onClick={() => hacerCalculo("suma")}>+</button>
          <button onClick={() => hacerCalculo("resta")}>-</button>
        </div>
        <div className="multiply-divide">
          <button onClick={() => hacerCalculo("multiplicacion")}>x</button>
          <button onClick={() => hacerCalculo("division")}>/</button>
        </div>
        <button onClick={reset}>Reset</button>
        <div className="contenedorResultado">
          <h2 className="resultado">{resultLocalStorage}</h2>
        </div>
      </div>
    </>
  );
}
