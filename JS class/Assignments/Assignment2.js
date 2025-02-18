function table(start, end) {

    for (let i = start; i <= end; i++) {
        console.log(`Table of ${i}`)
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} * ${j} = ${i * j}`)
        }
    }
}


// function

var arr1 = ['hanzala','Ubada','Ahmed','Hamza']
var arr2 = arr1

arr1[0] = 'Hammad'
console.log(arr1)
console.log(arr2)

// Using Spread Operator to avoid referncing

var arr3 = [...arr1]
arr3[2] = 'Umar'

console.log(arr1)
console.log(arr2)
console.log(arr3)


