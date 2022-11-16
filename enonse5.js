let chenn = "5 45 123 12"
chenn_nan = chenn.split(" ")
let pwod = 1
console.log(chenn_nan)
for (let i of chenn_nan) {

    s = 0

    for (let k in i) {
        s += parseInt(i[k])
    }
    pwod *= s

}
console.log(pwod)