let user = {
    name: "hanzala",
    age: 19
}

// Object.freeze(user)
// user.name = 'Ubada'
// console.log(user)

code = 'ga-de-ry-po-lu-ki-GA-DE-RY-PO-LU-KI'
mappings = code.split('-')
var mapping_object = {}
function createMapping() {
    for (ele of mappings) {
        mapping_object[ele[0]] = ele[1]
    }
}


function matching(char) {
    if (char in mapping_object) {
        return mapping_object[char]
    }
    return char
}
// function matching(char){
//     for (ele of mappings){
//         if (ele.includes(char)){
//             if (ele.indexOf(char) == 0){
//                 return ele[1]
//             }
//             else if (ele.indexOf(char) ==1){
//                 return ele[0]
//             }
//         }
//     }
//     return char
// }

// console.log(matching('g'))
// console.log(matching('d'))

function encode(string) {
    encodedString = ''
    for (chr of string) {
        encodedString += matching(chr)
    }
    return encodedString
}
// console.log(encode('Hanzala Khan'))
// console.log(encode('Hgnzgug Ihgn'))
// function encode(string){}

// Frequency Counter 

products = [
    "CPU",
    "GPU",
    "Motherboard",
    "Mouse",
    "Mouse",
    "Speaker",
    "CPU",
    "GPU",
    "Motherboard",
    "Mouse",
    "Mouse",
    "Speaker",
    "Mouse",
    "Speaker",
    "CPU",
    "GPU",
    "Motherboard",
    "Mouse",
    "Mouse",
    "Speaker",
   
]
let frequency = {}
for (let product of products) {
    if (frequency[product]) {
        frequency[product] += 1
    }
    else {
        frequency[product] = 1
    }
}

console.log(frequency)

function validAnagram(str1,str2){

}
