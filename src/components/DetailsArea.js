import React from "react";
import "../style/detailsArea.css";

const DetailsArea = ({ products }) => {
  const decimal = (num) => {
    return num?.toFixed(2);
  };

  return (
    <div className="details-area">
      <div className="details">
        <p>Produtos</p>
        <p>{`R$ ${decimal(products.subTotal)}`}</p>
      </div>
      <div className="details">
        <p>Frete</p>
        <p>{`R$ ${decimal(products.shippingTotal)}`}</p>
      </div>
      <div className="details orange-text">
        <p>Desconto</p>
        <p>{`R$ ${decimal(products.discount)}`}</p>
      </div>
      <div className="details">
        <p>Total</p>
        <p>{`R$ ${decimal(products.total)}`}</p>
      </div>
    </div>
  );
};

export default DetailsArea;
