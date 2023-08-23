import React from "react";
import ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Helmet } from "react-helmet";


const container = document.querySelector("#root");

const root = ReactDOMClient.createRoot(container);

root.render(
  <BrowserRouter>
  <Helmet>
        <script src="https://js.upload.io/upload-js-full/v1"></script>
      </Helmet>
    <App />
  </BrowserRouter>
);
