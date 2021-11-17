import React from "react";
import "../style/paymentDetails.css";

const PaymentDetails = () => {
  return (
    <div>
      <p className="big-title">Pagamento</p>
      <div className="cc-container">
        <span>****.****.****.1234</span>
        <span>José da Silva</span>
        <span>05/2019</span>
      </div>
    </div>
  );
};

export default PaymentDetails;
