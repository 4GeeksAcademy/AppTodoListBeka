import React, { useState } from "react";

// Create your first component
const Home = () => {
  const [frase, setFrase] = useState("");
  const [inputs, setInputs] = useState([]);

  const inputPrincipal = (e) => {
    setFrase(e.target.value);
  };

  const pulsarEnter = (e) => {
    if (e.key === "Enter") {
      if (frase.trim()) { 
        setInputs([...inputs, frase]);
        setFrase("");
      }
    }
  };

  const eliminarInput = (index) => {
    setInputs(inputs.filter((_, i) => i !== index));
  };

  

  return (
    <div className="text-center">
      <h1>Todos</h1>
      <div id="divcontenido" >
        <input
			className="inputPrincipal"
          type="text"
          value={frase}
          onChange={inputPrincipal}
          onKeyDown={pulsarEnter}
        />
        {inputs.map((input, index) => (
          <div key={index} id="divAbajo" className="input-container">
            <input
              id="input2"
              type="text"
              value={input}
              readOnly
            />
            <button
              onClick={() => eliminarInput(index)}
              className="icon"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
