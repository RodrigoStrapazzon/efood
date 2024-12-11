import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { EstiloGlobal } from "../styles/styles";
import Footer from "./components/Footer";

import { store } from "./store";
import Rotas from "./routes";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <EstiloGlobal />
          <Rotas />
          <Footer />
        </>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
