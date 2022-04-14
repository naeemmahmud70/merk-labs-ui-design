import React from "react";
import "./App.css";
import Audit from "./Components/Audit/Audit";
import Dapps from "./Components/Dapps/Dapps";
import Defi from "./Components/Defi/Defi";
import Expert from "./Components/Expert/Expert";
import Header from "./Components/Header/Header";
import LaunchedPad from "./Components/LaunchedPad/LaunchedPad";
import SmartContract from "./Components/SmartContract/SmartContract";

function App() {
  return (
    <div className="container-fluid bg-color">
      <Header></Header>
      <Defi></Defi>
      <Dapps></Dapps>
      <Audit></Audit>
      <Expert></Expert>
      <SmartContract></SmartContract>
      <LaunchedPad></LaunchedPad>
    </div>
  );
}

export default App;
