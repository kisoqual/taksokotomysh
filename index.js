import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Player from "./Player";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App/>
    <Player id="player" file="https://plrjs.com/sample.mp4"/>
  </React.StrictMode>,
  rootElement
);