arr = []
for (let i = 0;i<=10;i++){
    arr.push(Math.round(Math.random()*10))
    // arr.push(i)
}
console.log(arr)


function bubbleSort(arr){
    for (let i=0;i<=arr.length;i++){
        // console.log(arr[i])
        for(let j =0;j<=i;j++){
            if (arr[j]>arr[j+1]){
                temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

console.log(bubbleSort(arr))