import { Router } from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import { Global } from '@emotion/react'
import { globalStyles } from "./global.css";
import { useId } from "react";


const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
};

export default App;
