
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

// this function is O(3n)
// function validAnagram(str1,str2){
//     freq1 = frequencyCounter(str1)
//     freq2 = frequencyCounter(str2)
//     for(let ele in freq1){
//         // console.log(freq1[ele],freq2[ele])
//         if (freq1[ele] !== freq2[ele]||(!freq1[ele])||(!freq2[ele])){
//             return false
//         }
//     }
//     return true
// }
function validAnagram(str1,str2){
    str1 = str1.split("")
    str2 = str2.split("")
    for (let chr of str1){
        if (str2.indexOf(chr)!==-1){
            str2.splice(str2.indexOf(chr),1)
        }
        else{
            return false
        }
    }
    return true
}


console.log(validAnagram('car','rac'))
console.log(validAnagram('hat','aht'))
console.log(validAnagram('hatf','ahr'))