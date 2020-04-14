export default function select(deck, count) {

  let result;
  let pointer;
  const range = deck[deck.length - 1].end;
  const altRange = deck[deck.length - 1].altEnd;

  if (count % 10 === 0) {
    pointer = Math.floor(Math.random() * altRange);

    result = deck.find((i) => i.altStart <= pointer && i.altEnd > pointer);
  } else {
    pointer = Math.floor(Math.random() * range);
    result = deck.find((i) => i.start <= pointer && i.end > pointer);
  }

  return result;
}
