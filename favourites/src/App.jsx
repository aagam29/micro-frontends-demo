import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Favourite from "./components/Favourite";

const App = () => (
  <div className="h-screen flex flex-col bg-gray-50">
      <Favourite />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
