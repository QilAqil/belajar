console.log("Hallo Word")
    let nilai = 1
    let nilai1 = 2
    let hasil = nilai + nilai1
    console.log(hasil)

    let ipk = 4

    let grade = ipk > 3.5 ? "cumload" : ipk >= 3 && ipk <= 3.5 ? "baik" : "cukup"

    console.log(grade)

    for(let i = 0; i< 5; i++) {
        console.log(i)
    }

    let a = 0
    while (a < 4) {
        console.log(a)
        a++
    }

    let b = 0

    do {
        console.log(b)
        b++
    } while (b < 5)

const fruit = ["jeruk","apel","mango","banana"] //for in
for (key in fruit){
    console.log("for in "+ key)
    console.log("for in "+ fruit[key] )
}