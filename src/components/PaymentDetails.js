import React from "react";
import { useAuth } from "../providers/auth";
import "../style/paymentDetails.css";

const PaymentDetails = () => {
  const { details } = useAuth();
  const finalNumber = details.creditCard.substr(12);
  return (
    <div>
      <p className="big-title">Pagamento</p>
      <div className="cc-container">
        <span>****.****.****.{finalNumber}</span>
        <span>{details.name}</span>
        <span>{details.valid}</span>
      </div>
    </div>
  );
};

export default PaymentDetails;
