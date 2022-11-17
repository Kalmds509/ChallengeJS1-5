
let tab = [0, 1, 2, 3, 4];
let one, two, three, four;
for (let i in tab) {
    if (i == 0) {
        one = tab.reverse()
    } else if (i == 1) {
        two = tab.slice(0, 4).reverse()
        two.push(tab.at(-1))
    } else if (i == 2) {
        three = tab.slice(1, 4)
        three.push(tab[0], tab.at(-1))
    } else if (i == 3) {
        four = three.slice(0, 2).reverse().concat(three.slice(2))
    }


}
console.log(one)
console.log(two)
console.log(three)
console.log(four)
