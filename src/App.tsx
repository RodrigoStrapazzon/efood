import { Container, EstiloGlobal } from "../styles/styles";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

import Rotas from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <EstiloGlobal />
        <Rotas />
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
