import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import ProductCard from "../components/ProductCard";
import DetailsArea from "../components/DetailsArea";
import Button from "../components/Button";
import api from "../api";
import "../style/bag.css";
import { useHistory } from "react-router-dom";

const Bag = () => {
  const history = useHistory();
  const [products, setProducts] = useState(() => {
    return [];
  });

  const getProducts = async () => {
    try {
      const response = await api.get("");
      setProducts(() => response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const routeChange = () => {
    history.push(`/pagamento`, { products: products });
  };

  useEffect(() => {
    getProducts();
  }, []);

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
