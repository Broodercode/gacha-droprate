import select from "./cardSelect";
let count = 0;
let gradeWin = [];
let sampleDraw = [];
let finalResult = [
  { total: 0 },
  { grade: "ur", pos: 0, neg: 0 },
  { grade: "mr", pos: 0, neg: 0 },
  { grade: "sr", pos: 0, neg: 0 },
  { grade: "r", pos: 0, neg: 0 },
  { grade: "vur", pos: 0, neg: 0 },
  { grade: "vmr", pos: 0, neg: 0 },
  { grade: "vsr", pos: 0, neg: 0 },
  { grade: "vr", pos: 0, neg: 0 },
];

const update = (deck) => {
  count++;

  const pointer = select(deck, count);

  const index = deck.findIndex((i) => {
    return i.name === pointer.name;
  });
  deck[index].value++;
};

const iteration = (n, deck) => {
  while (n > 0) {
    update(deck);
    n--;
  }

  sampleDraw = [];
  deck.forEach((i) => {
    const name = i.name;
    const value = i.value;
    const port = i.port;

    sampleDraw.push({ name: name, value: value, port: port });
  });

  deck.forEach((i) => {
    if (i.value > 0 && !gradeWin.includes(i.grade)) {
      gradeWin = [...gradeWin].concat(i.grade);
    }
  });
};

const sample = (n, e, deck) => {
  e = e / 200;

  while (n > 0) {
    iteration(e, deck);
    let win = [...gradeWin];
    finalResult[0].total++;
    finalResult.forEach((i) => {
      if (win.includes(i.grade)) {
        i.pos++;
      } else {
        i.neg++;
      }
    });
    win = [];
    gradeWin = win;
    deck.forEach((i) => {
      if (i.value >= 1) {
        i.pos++;
      } else if (i.value === 0) {
        i.neg++;
      }
      i.value = 0;
    });
    n--;
  }

  finalResult.forEach((i) => {
    i.chance = parseInt((i.pos / finalResult[0].total) * 100);
  });
  deck.forEach((i) => {
    i.chance = (i.pos * 100) / (i.pos + i.neg);
  });
};

export { finalResult, sampleDraw, sample };
