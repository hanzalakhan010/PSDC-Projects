function chunkyMonkey(arr,size){
    newArr = []
    for (let i = 0;i<arr.length;i+=size){
        newArr.push(arr.slice(i,i+size))
    }
    return newArr
}
// size = 3
// length = 9

console.log(chunkyMonkey([1,2,3,4,5,6,8,9],3))