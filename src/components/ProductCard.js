import React from "react";
import "../style/productCard.css";

const ProductCard = ({ product, displayPrice }) => {
  return (
    <div className="card-container">
      <img
        className="img-products"
        src={product.imageObjects[0].small}
        alt=""
      />
      <div className="product-description">
        <p className="product-name">{product.name}</p>
        {displayPrice && (
          <p className="product-price">{`R$ ${product.priceSpecification.price.toFixed(
            2
          )}`}</p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
