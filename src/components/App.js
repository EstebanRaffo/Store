import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";
import AppProvider from "./ContextProvider";



const App = () => (
    <AppProvider>
      <div className="App">
        {/* <React.StrictMode> */}
        <BrowserRouter>
          <Main />
        </BrowserRouter>
        {/* </React.StrictMode> */}
      </div>
    </AppProvider>
);


export default App;
