import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ResourceProvider } from "./contexts/ResourceContext";

ReactDOM.render(
  <React.StrictMode>
    <ResourceProvider>
      <App />
    </ResourceProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
