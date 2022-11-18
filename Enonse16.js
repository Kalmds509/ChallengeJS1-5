let alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

let a ="<14P <1V <1H >4O"
a = a.toUpperCase()
let k = a.split(" ")
let result = " "
for (let l of k) {
if(l.length==3){
  if (l[0] == "<") {
    let idx = alfa.indexOf(l[2]) - parseInt(l[1])
    result += alfa[idx]
  }
  if (l[0] == ">") {
    let idx = alfa.indexOf(l[2]) + parseInt(l[1])
    result += alfa[idx]
  }
}
else if(l.length==4){
let r=parseInt(l.slice(1,3))
if(l[0]=="<"){
let idx = alfa.indexOf(l[3]) - r
    result += alfa[idx]
}
if(l[0]==">"){
let idx = alfa.indexOf(l[3]) + r
  result += alfa[idx]
}
}
}
console.log(result)