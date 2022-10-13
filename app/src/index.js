import React from "react";
import ReactDom from "react-dom";
import App from "./App";

const Index = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

ReactDom.render(<Index />, document.getElementById("root"));
