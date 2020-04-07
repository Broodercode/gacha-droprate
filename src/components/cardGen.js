

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../assets/cards', false, /\.(png|jpe?g|svg)$/));

export default function arrGen(gr, n, x, v, p){

    let pc = 1
    const totalArrBase = []
    while (n > x) {
      totalArrBase.push({
        name: `${gr}${n}`,
        value: 0,
        weight: v[0],
        grade: gr,
        pos: 0,
        neg: 0,
        chance: 0,
        port: images[`${gr}${n}.jpg`]
      });
  
      pc++
      n--;
    }
    while (x !== 0 && n === x) {
      totalArrBase.push({
        name: `${gr}${n}`,
        value: 0,
        weight: v[x],
        grade: gr,
        pos: 0,
        neg: 0,
        chance: 0
      });
  
  
      n--;
      x--;
    }

    return totalArrBase
  };

 