import React from "react";
import "./App.css";
import DeckController from "./components/DeckController"
import './sass/main.scss'
import Header from "./layout/Header"




function App() {
  return (
    <div className="App">
      <Header />
      <DeckController />
    
    </div>
  );
}

export default App;
