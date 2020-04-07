import select from "./cardSelect";

let gradeWin = []
const sampleDraw = []
let finalResult = [
    {total: 0},
    {grade: 'ur', pos: 0, neg: 0},
    {grade: 'mr', pos: 0, neg: 0},
    {grade: 'sr', pos: 0, neg: 0},
    {grade: 'r', pos: 0, neg: 0},
    {grade: 'vur', pos: 0, neg: 0},
    {grade: 'vmr', pos: 0, neg: 0},
    {grade: 'vsr', pos: 0, neg: 0},
    {grade: 'vr', pos: 0, neg: 0},
]

const update = (deck) => {
    // console.log(deck)
    const pointer = select(deck)
    // console.log(pointer)
    const index = deck.findIndex(i => {
        return i.name === pointer.name
    })
    deck[index].value++
}

const iteration = (n, deck) => {
    // console.log(deck)
    while (n > 0) {
        update(deck);
        n--
    }
    if (sampleDraw.length <= 0) {
        deck.forEach(i => {
            // console.log(i.name)
           const name = i.name
           const value = i.value
           const port = i.port
            sampleDraw.push({name: name, value: value, port: port})
        })
        // console.log(sampleDraw)
    }
    deck.forEach(i => {
     
        // console.log(i.grade)
        if(i.value > 0 && !gradeWin.includes(i.grade)) {
          
            gradeWin = [...gradeWin].concat(i.grade)
            // console.log('grade win iteration')
            // console.log(gradeWin)
        }
    })
}

const sample = (n, e, deck) => {
 
    // console.log(n, e, deck)
    while (n > 0) {
        
        iteration(e, deck)
        let win = [...gradeWin]
        finalResult[0].total++
        finalResult.forEach(i => {
            if (win.includes(i.grade)) {
                i.pos++
            } else {
                i.neg++
            }
        })
        win = []
        gradeWin = win
        deck.forEach(i => {
            if(i.value >= 1) {
                i.pos++
            } else if (i.value === 0) {
                i.neg++
            }
            i.value = 0;
        })
        n--;
    }
    // console.log(finalResult)
    finalResult.forEach(i => {
        i.chance = ((i.pos)/(finalResult[0].total))
      })
      deck.forEach(i => {
      //   console.log(i.name)
        i.chance = ((i.pos*100)/(i.pos+i.neg))
      })

};
 
 console.log('finalResult')
// console.log(finalResult)

// console.log(deck1)
// console.log(finalResult)
export {finalResult, sampleDraw, sample}