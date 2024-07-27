import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MyContextProvider } from "./contextapi/MyContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MyContextProvider>
      <App />
    </MyContextProvider>
  </React.StrictMode>
);

reportWebVitals();
