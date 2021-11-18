import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthPdovider } from "./providers/auth";

ReactDOM.render(
  <AuthPdovider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthPdovider>,
  document.getElementById("root")
);
