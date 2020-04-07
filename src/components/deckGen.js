import cardGen from './cardGen'


export function deckA() { 

const a = cardGen("ur", 10, 1, [211, 105]);
const b = cardGen("mr",  14, 0, [571]);
const c = cardGen("sr",  11, 0, [2857]);
const d = cardGen("r",  3, 0, [2857]);
const e = cardGen("vur",  8, 1, [250]);
const f = cardGen("vmr",  9, 0, [889]);
const g = cardGen("vsr",  10, 0, [2000]);
const h = cardGen("vr",  10, 0, [2000]);

const totalArr = [...a, ...b, ...c, ...d, ...e, ...f, ...g, ...h]

totalArr.forEach(n => {
   const index = totalArr.findIndex(i => {
      return i === n;
    });
 
    if (index === 0) {
      const start = 0;
      const end = (totalArr[index].weight);
     
      totalArr[index].start = start;
      totalArr[index].end = end;
   
    } else {
      const start = (totalArr[index - 1].end);
   
      totalArr[index].start = start;
      
      const end = (totalArr[index].weight) + (totalArr[index].start);

      totalArr[index].end = end;
 
    }
  });

return totalArr

}
export function deckB() { 

const a = cardGen("ur", 11, 2, [126, 802, 64], [null, 'ur11', 'ur5']);
const b = cardGen("mr",  15, 1, [464, 1503]);
const c = cardGen("sr",  11, 0, [2857]);
const d = cardGen("r",  3, 0, [2857]);
const e = cardGen("vur",  9, 1, [150, 802]);
const f = cardGen("vmr",  9, 0, [889]);
const g = cardGen("vsr",  10, 0, [2000]);
const h = cardGen("vr",  10, 0, [2000]);

const totalArr = [...a, ...b, ...c, ...d, ...e, ...f, ...g, ...h]

totalArr.forEach(n => {
   const index = totalArr.findIndex(i => {
      return i === n;
    });
 
    if (index === 0) {
      const start = 0;
      const end = (totalArr[index].weight);
     
      totalArr[index].start = start;
      totalArr[index].end = end;
   
    } else {
      const start = (totalArr[index - 1].end);
   
      totalArr[index].start = start;
      
      const end = (totalArr[index].weight) + (totalArr[index].start);

      totalArr[index].end = end;
 
    }
  });

return totalArr

}
