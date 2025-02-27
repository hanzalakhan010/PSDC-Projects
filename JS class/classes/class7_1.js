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

// Truncate string
function truncteString(str,maxLength){
    let newStr = ''
    newStr +=str.slice(0,maxLength)
    newStr+='.'.repeat(str.length-maxLength)
    return newStr
}
console.log(truncteString('Hanzala Khan',3))

function discountCalclator(price,discountPercentage){
    console.log(`Original Price: ${price},  Discount Price:$${price*discountPercentage/100}`)
}
// Vowel Count
function vowelCount(string){
    let count =0;
    for (let chr of string){
        if (chr == 'a' ||chr == 'e' ||chr == 'i' ||chr == 'o' ||chr == 'u' ){
            count++
        }
    }
    return count
}

console.log(vowelCount('hanzala Khan'))
