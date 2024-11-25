import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { Container, EstiloGlobal } from "../styles/styles";
import Footer from "./components/Footer";

import { store } from "./store";
import Rotas from "./routes";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container>
          <EstiloGlobal />
          <Rotas />
          <Footer />
        </Container>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
