function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
}

const images = importAll(
  require.context("../assets/cards", false, /\.(png|jpe?g|svg)$/)
);

export default function arrGen(gr, n, x, v, p, adj, ex) {
  let pc = 1;
  let ns = 0;

  const totalArrBase = [];
  while (n > x) {
    let name = `${gr}${pc}`;

    if (name === `${gr}${p[ns]}` || name === `${gr}${ex}`) {
      pc++;
    }
    totalArrBase.push({
      name: `${gr}${n}`,
      value: 0,
      weight: v[0],
      altWeight: adj[0],
      grade: gr,
      pos: 0,
      neg: 0,
      chance: 0,
      port: images[`${gr}${pc}.jpg`],
    });

    pc++;
    n--;
  }
  while (x !== 0 && n === x) {
    totalArrBase.push({
      name: `${gr}${n}`,
      value: 0,
      weight: v[x],
      altWeight: adj[x],
      grade: gr,
      pos: 0,
      neg: 0,
      chance: 0,
      port: images[`${gr}${p[n - 1]}.jpg`],
    });

    n--;
    x--;
  }

  return totalArrBase;
}
