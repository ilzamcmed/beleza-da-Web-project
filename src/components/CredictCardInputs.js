import React, { useState } from "react";
import "../style/creditCardInputs.css";

const CredictCardInputs = ({ creditCardData }) => {
  const [details, setDetails] = useState({
    cc: "",
    name: "",
    valid: "",
    cvv: "",
  });
  const [creditCard, setCreditCard] = useState("");
  const [name, setName] = useState("");
  const [valid, setValid] = useState("");
  const [cvv, setCvv] = useState("");

  const handleCommnent = (event) => {
    event.preventDefault();
    setCreditCard(creditCard);
    // setName(name);
    // setValid(valid);
    // setCvv(cvv);
    setDetails((creditCardData = [{ cc: creditCard }]));
  };
  return (
    <form
      onSubmit={(e) => {
        handleCommnent(e);
      }}
      className="credit-container"
    >
      <div className="label-input-container">
        <label htmlFor="ccn">Número do cartão:</label>
        <input
          id="cc"
          type="tel"
          inputMode="numeric"
          pattern="[0-9\s]{(13, 19)}"
          autoComplete="cc-number"
          maxLength="16"
          placeholder="____.____.____.____"
          onChange={(e) => setCreditCard(e.target.value)}
          value={creditCard}
        />
      </div>
      {/*<div className="label-input-container">
        <label htmlFor="name">Nome do Titular:</label>
        <input
          id="name"
          type="text"
          placeholder="Como no cartão"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className="label-input-container small-container">
        <div className="label-input">
          <label htmlFor="date">Validade (mês/ano):</label>
          <input
            id="date"
            type="date"
            placeholder="__/____"
            onChange={(e) => setValid(e.target.value)}
            value={valid}
          />
        </div>
        <div className="label-input">
          <label htmlFor="cvv">CVV:</label>
          <input
            id="cvv"
            placeholder="___"
            maxLength="3"
            type="tel"
            inputMode="numeric"
            onChange={(e) => setCvv(e.target.value)}
            value={cvv}
          />
        </div>
      </div> */}
    </form>
  );
};

export default CredictCardInputs;
