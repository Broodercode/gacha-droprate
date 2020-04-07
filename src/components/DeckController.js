import React, { Component } from 'react';
import {finalResult, sampleDraw, sample} from "./deckStats"
import { deckA, deckB } from "./deckGen";




const sd = sampleDraw
const d1 = deckA()
const d2 = deckB()
sample(2000, 100, d2)
const sampleList = sd.map(i => {
    return (
        <li>
    <img src={i.port} />  {`Name: ${i.name} Value: ${i.value}`}
    </li>
    )
 
})

class DeckController extends Component {
    state = {  }
    
    
    render() {
        return (
            <div>
                <img src={''} alt='Character Portrait'></img>
                {console.log(d2)}
                <ul>
                
                {sampleList}
                </ul>
                
            </div>
        );
    }
}

export default DeckController;