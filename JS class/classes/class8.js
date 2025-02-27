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

function frequencyCounter(string){
    let frequency = {}
    for (let chr of string) {
        if (frequency[chr]) {
            frequency[chr] += 1
        }
        else {
            frequency[chr] = 1
        }
    }
    return frequency
}


function validAnagram(str1,str2){
    freq1 = frequencyCounter(str1)
    freq2 = frequencyCounter(str2)
    for(let ele in freq1){
        // console.log(freq1[ele],freq2[ele])
        if (freq1[ele] !== freq2[ele]||(!freq1[ele])||(!freq2[ele])){
            return false
        }
    }
    return true
}

console.log(validAnagram('car','rac'))
console.log(validAnagram('hat','aht'))
console.log(validAnagram('hatf','ahr'))