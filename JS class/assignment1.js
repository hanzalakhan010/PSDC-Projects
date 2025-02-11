// // // 2/4/25
// // // Array vs object
// // // var let const


// // fruits = [
//     //     'Banana',
//     //     'Appple',
//     //     'Orange'
//     // ]
//     //     var laptop = "HP Elite"
//     //     let manafacturer = "HP"
//     //     const pi = 3.14
//     //     // manafacturer outside this scope is undefined
//     // }console.log(obj1)
// var cart = {
//     pen: {
//         quantity: 10,
//         manafacturer: 'Signature',
//         price: 10
//     },
//     calculator: {
//         quantity: 1,
//         manafacturer: 'Calola',
//         price: 100
//     },
//     notepad: {
//         quantity: 2,
//         manafacturer: 'gaba',
//         price: 50
//     }
// }

// function addToCart(item,quantity) {
//     if (cart.item){
//         cart.item.quantity++
//     }

// }    
    

// // console.log(laptop)console.log(obj1)

// // // console.log(manafacturer) // this will throw errorconsole.log(obj1)
    


// obj1 = {
//     name :'hanzala',
//     age:19,
//     addr:"karachi"
// }

// obj2 = {...obj1}
// console.log(obj1.name)
// console.log(obj2.name)

// obj1.name = 'Ubada'

// console.log(obj1)
// console.log(obj2)


// var a =1 
// var a = 3




// const a = {
//     name:  "hanzala"
// }
// a.name = 'Ubada'
// a.age = 12
// console.log(a)


// var a = new Date()
// console.log(a.getMonth())
// Assignment :
// table of form 1-5



// var a = 10
// var b = 12


// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)

// var tables = []


// for (let i=1;i<=5;i++){
//     // console.log(`table of ${i}`)
//     tables = []
//     for(let j=1;j<=10;j++){
//         // tables.push(`${i} * ${j} = ${i*j}`)
//         console.log(`${i} * ${j} = ${i*j}`)
//     }
// }

// var fruits = ['Apple','Banana',"Cherry"]
// console.log(fruits.indexOf('Apple'))

// fruits.push(...['Date','Mangoe'])
// console.log(fruits)

// fruits.unshift(...['Banana',"apple"])
// console.log(fruits)

// console.log(fruits.pop())

// console.log(fruits.shift())
// console.log(fruits)

// console.log(fruits.keys())


// fruits[10] = 'Hanzala'
// console.log(fruits.values())


// console.log(fruits.slice(1,3))

// students = [
//     {name:'Hanzala',age:19},
//     {name:'Ahmed',age:23},
//     {name:'Bilal',age:10}
// ]

// console.log(students.includes({name:'Hanzala',age:19}))

// st = students.filter((ele) => ele.age>10)
// console.log(st)


// let set1 = [1,2,3]
// let set2 = [4,5,6]
// let set3 = [7,8,9]
// set4 = set1.concat(set3,set2)
// console.log(set4)

// console.log(set4.includes(set4.pop()))

// set1 = [1,2,3,4,5,7,8]
// console.log(set1.slice(10,))


let  months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];
  
months.splice(2,2,...["hanzala",'Khan','ahmed'])
console.log(months)