import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Bag from "./pages/Bag";
import Confirmation from "./pages/Confirmation";
import Payment from "./pages/Payment";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Bag} path="/" exact />
      <Route component={Payment} path="/pagamento" />
      <Route component={Confirmation} path="/confirmacao" />
    </BrowserRouter>
  );
};

export default Routes;
