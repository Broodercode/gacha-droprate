import React from "react";
import "./App.css";
import {finalResult, sampleDraw, sample} from "./components/deckStats"
import { deckA, deckB } from "./components/deckGen";
import DeckController from "./components/DeckController"




// const d1 = deckA()
// const d2 = deckB()
// sample(2000, 100, d2)
// const ds = finalResult
function App() {
  return (
    <div className="App">
      <DeckController />
      {/* {console.log(ds)}
      {console.log(d2)}
      {console.log(sampleDraw)} */}
    
    </div>
  );
}

export default App;
