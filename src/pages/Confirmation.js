import React from "react";
import { useLocation } from "react-router-dom";
import DetailsArea from "../components/DetailsArea";
import Nav from "../components/Nav";
import PaymentDetails from "../components/PaymentDetails";
import ProductCard from "../components/ProductCard";

const Confirmation = () => {
  const location = useLocation();
  const products = location.state.products;
  const details = location.state.details;

  console.log(details);
  return (
    <Nav>
      <PaymentDetails />
      <p className="bag-title">Products</p>
      {products.items.map((product) => (
        <ProductCard
          key={Math.random()}
          product={product.product}
          displayPrice={false}
        />
      ))}
      <DetailsArea products={products} />
    </Nav>
  );
};

export default Confirmation;
