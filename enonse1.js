const prompt = require('prompt-sync')();
// let adresIP=prompt("Enter the IPadress to know the door that is oppen: ")

let adresIP = "127.0.0.1"
let ad = adresIP.replaceAll(".", "")
let s = 0
for (let k in ad) {
    s += parseInt(ad[k]) * parseInt(ad[0])
}
console.log(s)

