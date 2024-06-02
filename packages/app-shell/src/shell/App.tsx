import { Router } from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import { Global } from '@emotion/react'
import { globalStyles } from "./global.css";


const App = () => (
  <>
    <Global
      styles={globalStyles}
    />
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </>
);

export default App;
