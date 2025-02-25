// functions

// add 2 number
// function add(a = 5, b = 5) {
//     console.log(a + b)
// }
// function subtract(a = 5, b = 5) {
//     console.log(a - b)
// }
// function mult(a = 5, b = 5) {
//     console.log(a * b)
// }
// function div(a = 5, b = 5) {
//     console.log(a / b)
// }
// // add(1, 10)
// // subtract(3, 2)
// // mult(2, 4)

// function demo(a = 'hanzala', b) {
//     function add(a = 5, b = 5) {
//         console.log(a + b)
//     }
//     return  add
// }
// z = demo()

// z()



function truncteString(str,maxLngth){
    let newStr = ''
    newStr +=str.slice(0,maxLngth)
    newStr+='.'.repeat(str.length-maxLngth)
    return newStr
}


console.log(truncteString('hazala khan',3))