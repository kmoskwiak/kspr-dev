import { Theme } from "@kspr-dev/common";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/Router";

const App = () => {
  return (
    <BrowserRouter>
      <Theme>
        <Router />
      </Theme>
    </BrowserRouter>
  )
};

export default App;
