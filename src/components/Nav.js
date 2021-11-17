import React from "react";
import { Link } from "react-router-dom";
import "../style/nav.css";

const Nav = ({ children, to }) => {
  const bagClass = window.location.pathname === "/" ? "active" : "";
  const paymentClass = window.location.pathname.match(/^\/pagamento/)
    ? "active"
    : "";
  const confirmationClass = window.location.pathname.match(/^\/confirmacao/)
    ? "active"
    : "";
  return (
    <>
      <div className="nav-container">
        <ul className="nav-list">
          <li className={`nav-item ${bagClass}`}>
            <Link to="/">Sacola</Link>
          </li>
          <li className={`nav-item ${paymentClass}`}>
            <Link to="/pagamento">Pagamento</Link>
          </li>
          <li className={`nav-item ${confirmationClass}`}>
            <Link to="/confirmacao">Confirmacao</Link>
          </li>
        </ul>
      </div>
      {children}
    </>
  );
};

export default Nav;
