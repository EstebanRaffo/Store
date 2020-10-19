import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";

// 0. Identificar y crear el estado inicial
// 1. Identificar y crear las acciones
// 2. Construir el reducer
// 3. Crear la store
// 4. Conectar y/o refactorizar los componentes
// 5. Englobar la aplicacion con el provider

const App = () => (
  <div className="App">
    {/* <React.StrictMode> */}
    <BrowserRouter>
      <Main />
    </BrowserRouter>
    {/* </React.StrictMode> */}
  </div>
);

export default App;
