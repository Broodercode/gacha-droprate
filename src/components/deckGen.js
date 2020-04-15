import cardGen from "./cardGen";

export function deckA() {
  const a = cardGen("ur", 11, 1, [191, 95], [5], [191, 95], [12]);
  const b = cardGen("mr", 15, 0, [533], [], [3200]);
  const c = cardGen("sr", 11, 0, [2857], [], [0]);
  const d = cardGen("r", 3, 0, [2857], [], [0]);
  const e = cardGen("vur", 9, 0, [223], [], [223]);
  const f = cardGen("vmr", 9, 0, [889], [], [5333]);
  const g = cardGen("vsr", 10, 0, [2000], [], [0]);
  const h = cardGen("vr", 10, 0, [2000], [], [0]);

  const totalArr = [...a, ...b, ...c, ...d, ...e, ...f, ...g, ...h];

  totalArr.forEach((n) => {
    const index = totalArr.findIndex((i) => {
      return i === n;
    });

    if (index === 0) {
      const start = 0;
      const end = totalArr[index].weight;
      const altStart = 0;
      const altEnd = totalArr[index].altWeight;
      totalArr[index].start = start;
      totalArr[index].altStart = altStart;
      totalArr[index].end = end;
      totalArr[index].altEnd = altEnd;

      totalArr[index].start = start;
      totalArr[index].end = end;
    } else {
      const start = totalArr[index - 1].end;
      let altStart = totalArr[index - 1].altEnd;

      totalArr[index].start = start;
      totalArr[index].altStart = altStart;

      const end = totalArr[index].weight + totalArr[index].start;
      let altEnd = totalArr[index].altWeight + totalArr[index].altStart;

      totalArr[index].end = end;
      totalArr[index].altEnd = altEnd;
    }
  });

  return totalArr;
}
export function deckB() {
  const a = cardGen("ur", 12, 2, [115, 57, 801], [5, 12], [115, 57, 801]);
  const b = cardGen("mr", 16, 1, [433, 1501], [15], [3020, 1501]);
  const c = cardGen("sr", 11, 0, [2857], [], [0]);
  const d = cardGen("r", 3, 0, [2857], [], [0]);
  const e = cardGen("vur", 9, 1, [134, 801], [10], [134, 801]);
  const f = cardGen("vmr", 9, 0, [889], [], [5332]);
  const g = cardGen("vsr", 10, 0, [2000], [], [0]);
  const h = cardGen("vr", 10, 0, [2000], [], [0]);

  const totalArr = [...a, ...b, ...c, ...d, ...e, ...f, ...g, ...h];

  totalArr.forEach((n) => {
    const index = totalArr.findIndex((i) => {
      return i === n;
    });

    if (index === 0) {
      const start = 0;
      const end = totalArr[index].weight;
      const altStart = 0;
      const altEnd = totalArr[index].altWeight;
      totalArr[index].start = start;
      totalArr[index].altStart = altStart;
      totalArr[index].end = end;
      totalArr[index].altEnd = altEnd;
    } else {
      const start = totalArr[index - 1].end;
      let altStart = totalArr[index - 1].altEnd;

      totalArr[index].start = start;
      totalArr[index].altStart = altStart;

      const end = totalArr[index].weight + totalArr[index].start;
      let altEnd = totalArr[index].altWeight + totalArr[index].altStart;
      totalArr[index].end = end;
      totalArr[index].altEnd = altEnd;
    }
  });

  return totalArr;
}
export function deckC() {
  const a = cardGen("ur", 12, 3, [43, 21, 801, 801], [5, 11, 1], [43, 21, 801, 801]);
  const b = cardGen("mr", 16, 0, [433], [], [3000]);
  const c = cardGen("sr", 11, 0, [2857], [], [0]);
  const d = cardGen("r", 3, 0, [2857], [], [0]);
  const e = cardGen("vur", 9, 1, [120, 801], [11], [120, 801]);
  const f = cardGen("vmr", 9, 0, [889], [], [5333]);
  const g = cardGen("vsr", 10, 0, [2000], [], [0]);
  const h = cardGen("vr", 10, 0, [2000], [], [0]);

  const totalArr = [...a, ...b, ...c, ...d, ...e, ...f, ...g, ...h];

  totalArr.forEach((n) => {
    const index = totalArr.findIndex((i) => {
      return i === n;
    });

    if (index === 0) {
      const start = 0;
      const end = totalArr[index].weight;
      const altStart = 0;
      const altEnd = totalArr[index].altWeight;
      totalArr[index].start = start;
      totalArr[index].altStart = altStart;
      totalArr[index].end = end;
      totalArr[index].altEnd = altEnd;
    } else {
      const start = totalArr[index - 1].end;
      let altStart = totalArr[index - 1].altEnd;

      totalArr[index].start = start;
      totalArr[index].altStart = altStart;

      const end = totalArr[index].weight + totalArr[index].start;
      let altEnd = totalArr[index].altWeight + totalArr[index].altStart;
      totalArr[index].end = end;
      totalArr[index].altEnd = altEnd;
    }
  });

  return totalArr;
}
