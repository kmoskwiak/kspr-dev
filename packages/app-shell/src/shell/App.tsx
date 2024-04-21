import { Router } from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import React from "react";

const App = () => (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
);

export default App;
