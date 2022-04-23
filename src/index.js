import React from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter} from 'react-router-dom'
import "./index.css";
import App from "./Components/App/App";
// import reportWebVitals from './reportWebVitals';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <BrowserRouter>
  <React.StrictMode>
      <App />
  </React.StrictMode>,
    </BrowserRouter>
);
