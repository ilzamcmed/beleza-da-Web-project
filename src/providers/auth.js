import React, { useEffect, useState } from "react";
import api from "../api";

export const AuthContext = React.createContext({});

export const AuthPdovider = ({ children }) => {
  const [details, setDetails] = useState({
    creditCard: "",
    name: "",
    valid: "",
    cvv: "",
  });
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await api.get("");
      setProducts(() => response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <AuthContext.Provider value={{ details, setDetails, products }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
