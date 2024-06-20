import { useState } from "react";
import MyNavBar from "./components/MyNavBar";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavBar />
      </BrowserRouter>
    </>
  );
}

export default App;
