import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import "../style/payment.css";
import { useLocation, useHistory } from "react-router-dom";
import DetailsArea from "../components/DetailsArea";
import CredictCardInputs from "../components/CredictCardInputs";
import Button from "../components/Button";

const Payment = () => {
  const location = useLocation();
  const history = useHistory();
  const products = location.state.products;
  let details;

  // useEffect(() => {
  //   if (!location.state) {
  //     history.push("/");
  //   }
  // }, [location, history]);

  const routeChange = () => {
    history.push(`/confirmacao`, { products: products, details: details });
    console.log(details);
  };

  const routeBack = () => {
    history.push(`/`);
  };

  return (
    <Nav>
      <span className="back-txt" onClick={routeBack}>
        Back
      </span>
      <p className="bag-title">CARTÃO DE CRÉDITO</p>
      <CredictCardInputs creditCardData={details} />
      <DetailsArea products={products} />
      <Button text="finalizar pedido" action={routeChange} />
    </Nav>
  );
};

export default Payment;
