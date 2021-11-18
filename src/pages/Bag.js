import React from "react";
import Nav from "../components/Nav";
import ProductCard from "../components/ProductCard";
import DetailsArea from "../components/DetailsArea";
import Button from "../components/Button";
import "../style/bag.css";
import { useHistory } from "react-router-dom";
import { useAuth } from "../providers/auth";

const Bag = () => {
  const history = useHistory();
  const { products } = useAuth();

  const routeChange = () => {
    history.push(`/pagamento`);
  };

  return (
    <Nav>
      <p className="bag-title">Produtos</p>
      {products.items?.length > 0 ? (
        <>
          {products.items.map((product) => (
            <ProductCard
              key={Math.random()}
              product={product.product}
              displayPrice
            />
          ))}
          <DetailsArea products={products} />
          <Button text="Seguir para o pagamento" action={routeChange} />
        </>
      ) : (
        <p>Loading....</p>
      )}
    </Nav>
  );
};

export default Bag;
