import React from "react";
import { useHistory } from "react-router-dom";
import DetailsArea from "../components/DetailsArea";
import Nav from "../components/Nav";
import PaymentDetails from "../components/PaymentDetails";
import ProductCard from "../components/ProductCard";
import { useAuth } from "../providers/auth";

const Confirmation = () => {
  const history = useHistory();

  const { details, setDetails, products } = useAuth();

  const routeBack = () => {
    setDetails({ creditCard: "", name: "", valid: "", cvv: "" });
    history.push(`/pagamento`, { ...details });
  };

  return (
    <Nav>
      <span className="back-txt" onClick={routeBack}>
        Back
      </span>
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
