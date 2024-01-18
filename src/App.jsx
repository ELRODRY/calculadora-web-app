import { useState } from "react";
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

  const add = () => {
    const result =
      parseFloat(localStorage.getItem("valor1")) +
      parseFloat(localStorage.getItem("valor2"));
    localStorage.setItem("result", `${result}`);
    setTriggerResult(!triggerResult);
  };

  const subtract = () => {
    const result =
      parseFloat(localStorage.getItem("valor1")) -
      parseFloat(localStorage.getItem("valor2"));
    localStorage.setItem("result", `${result}`);
    setTriggerResult(!triggerResult);
  };

  const multiply = () => {
    const result =
      parseFloat(localStorage.getItem("valor1")) *
      parseFloat(localStorage.getItem("valor2"));
    localStorage.setItem("result", `${result}`);
    setTriggerResult(!triggerResult);
  };

  const divide = () => {
    const result =
      parseFloat(localStorage.getItem("valor1")) /
      parseFloat(localStorage.getItem("valor2"));
    localStorage.setItem("result", `${result}`);
    setTriggerResult(!triggerResult);
  };

  const reset = () => {
    localStorage.clear("result");
    localStorage.clear("valor1");
    localStorage.clear("valor2");
    document.getElementById("inputsForm").reset();
    setTriggerResult(!triggerResult);
  };

  return (
    <>
      <h1>CALCULADORA WEB</h1>


      <form className="calculadora" id="inputsForm" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="valor1">valor1</label>
        <input name="valor1" defaultValue={localStorage.getItem("valor1")} />
        <label htmlFor="valor2">valor2</label>
        <input
          name="valor2"
          type="valor2"
          defaultValue={localStorage.getItem("valor2")}
        />
        <button type="submit">INGRESAR VALOR</button>
      </form>
      <div className="add-subtract">
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
      </div>
      <div className="multiply-divide">
        <button onClick={multiply}>x</button>
        <button onClick={divide}>/</button>
      </div>
      <button onClick={reset}>Reset</button>
      <div className="contenedorResultado">
        <h2 className="resultado">{localStorage.getItem("result")}</h2>
      </div>

    </>
  );
}
