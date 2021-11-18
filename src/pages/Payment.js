import React from "react";
import Nav from "../components/Nav";
import "../style/payment.css";
import { useHistory } from "react-router-dom";
import DetailsArea from "../components/DetailsArea";
import CredictCardInputs from "../components/CredictCardInputs";
import Button from "../components/Button";
import { useAuth } from "../providers/auth";

const Payment = () => {
  const history = useHistory();
  const { details, setDetails, products } = useAuth();

  const routeChange = () => {
    history.push(`/confirmacao`, { products: products, ...details });
  };

  const routeBack = () => {
    setDetails({ creditCard: "", name: "", valid: "", cvv: "" });
    history.push(`/`);
  };

  const handleNoData = () => {
    if (
      details.creditCard === "" ||
      details.name === "" ||
      details.valid === "" ||
      details.cvv === ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Nav>
      <span className="back-txt" onClick={routeBack}>
        Back
      </span>
      <p className="bag-title">CARTÃO DE CRÉDITO</p>
      <CredictCardInputs creditCardData={details} />
      <DetailsArea products={products} />
      <Button
        text="finalizar pedido"
        action={routeChange}
        disabled={handleNoData()}
      />
    </Nav>
  );
};

export default Payment;
