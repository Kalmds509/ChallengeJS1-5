//Ranplase tou let ki devan yon voyel pa yon *
const prompt = require('prompt-sync')();
let teks = prompt("Antre yon teks: ")
// teks=teks.strip()
voyel = "aeiouyAEIOUY"
for (i in teks) {
    if (voyel.includes(teks[i])) {
        teks = teks.replace(teks[i - 1], "*")
    }
}
console.log(teks)