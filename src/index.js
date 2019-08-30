import React from "react";
import ReactDOM from "react-dom";
import App1 from "./map";
import "./styles.css";

function App() {
  return (
    <div>
      <App1 />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
