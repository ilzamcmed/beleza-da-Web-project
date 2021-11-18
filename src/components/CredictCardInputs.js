import React from "react";
import { useAuth } from "../providers/auth";
import "../style/creditCardInputs.css";

const CredictCardInputs = () => {
  const { details, setDetails } = useAuth();

  return (
    <form className="credit-container">
      <div className="label-input-container">
        <label htmlFor="ccn">Número do cartão:</label>
        <input
          id="cc"
          type="tel"
          required
          inputMode="numeric"
          pattern="[0-9\s]{(13, 19)}"
          autoComplete="cc-number"
          maxLength="16"
          placeholder="____.____.____.____"
          onChange={(e) =>
            setDetails({ ...details, creditCard: e.target.value })
          }
          value={details.creditCard}
        />
      </div>
      <div className="label-input-container">
        <label htmlFor="name">Nome do Titular:</label>
        <input
          id="name"
          type="text"
          required
          placeholder="Como no cartão"
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
          value={details.name}
        />
      </div>
      <div className="label-input-container small-container">
        <div className="label-input">
          <label htmlFor="date">Validade (mês/ano):</label>
          <input
            id="date"
            type="date"
            required
            placeholder="__/____"
            onChange={(e) => setDetails({ ...details, valid: e.target.value })}
            value={details.valid}
          />
        </div>
        <div className="label-input">
          <label htmlFor="cvv">CVV:</label>
          <input
            id="cvv"
            type="tel"
            required
            placeholder="___"
            maxLength="3"
            inputMode="numeric"
            onChange={(e) => setDetails({ ...details, cvv: e.target.value })}
            value={details.cvv}
          />
        </div>
      </div>
    </form>
  );
};

export default CredictCardInputs;
