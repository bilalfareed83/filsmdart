import React from "react";
import "./App.css";
import RouterComponent from "./components/RouterComponent";
import ButtonAppBar from "./components/AppBar";

function App() {
  return (
    <div>
      <ButtonAppBar />
      <RouterComponent />
    </div>
  );
}

export default App;
