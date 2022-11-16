let teks = "ayiti boN peyi"
teks = teks.split(" ")

let fraz_final = ""
for (let i of teks) {

  i = (i + '').charAt(0).toUpperCase() + i.substr(1).toLowerCase();
  console.log(i)
  fraz_final += i + " "
}
console.log(fraz_final)  