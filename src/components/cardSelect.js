import { deckA } from "./deckGen";



export default function select(deck) {
    // const deck = deckA()
    const pointer = Math.floor(Math.random()*100000);
    const result = deck.find(i => i.start <= pointer && i.end > pointer);
    return result
}