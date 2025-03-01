function chunkyMonkey(arr,size){
    newArr = []
    for (let i = 0;i<arr.length;i+=size){
        newArr.push(arr.slice(i,i+size))
    }
    return newArr
}
// size = 3
// length = 9

// console.log(chunkyMonkey([1,2,3,4,5,6,8,9],3))
console.log(chunkyMonkey([
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'
  ],5))