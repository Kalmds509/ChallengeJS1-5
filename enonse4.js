const prompt = require('prompt-sync')();
function menu() {
    console.log("1-Nan yon enteval,total nonb ki miltip a men ki pa miltip b")
    console.log("2-Nan yon enteval,total nonb ki miltip b men ki pa miltip a")
    console.log("3-Nan yon enteval,total nonb ki miltip a ak b")
    console.log("4-Nan yon enteval,total nonb ki pa miltip ni a ni b")
    let a = 2
    let b = 3
    let c = 0
    let chwa = prompt("Fe chwa")
    if (chwa == "1") {
        for (let i = 0; i <= 20; i++) {
            if (i % a == 0 && i % b != 0) {
                console.log(i)
                c += 1
            }
        }
        console.log("Total nonb ki miltip a ki pa miltip b se:" + c)
    } else if (chwa == "2") {
        c = 0
        for (let i = 0; i <= 20; i++) {
            if (i % b === 0 && i % a !== 0) {
                console.log(i)
                c += 1
            }
        }

        console.log("Total nonb ki miltip b ki pa miltip a se:" + c)
    }
    else if (chwa == "3") {
        c = 0
        for (let i = 0; i <= 20; i++) {
            if (i % a === 0 && i % b === 0) {
                console.log(i)
                c += 1
            }
        }
        console.log("Total nonb ki miltip a ak b se :" + c)
    }
    else if (chwa == "4") {
        c = 0
        for (let i = 0; i <= 20; i++) {
            if (i % a !== 0 && i % b !== 0) {
                console.log(i)
                c += 1
            }
        }
        console.log("Total nonb ki pa miltip ni a ni b se :" + c)
    }
}

menu()