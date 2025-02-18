// swap variable in js

// a = 2
// b= 3 
// var temp 

// console.log(a,b)

// temp = b
// b = a 
// a = temp

// console.log(a,b)


// [b,a] =[a,b]
// console.log(a,b)


// // simple trick to convert string to int

// num = '1234'
// num = parseInt(num)

// console.log(num)


// // String Concatenaion

// firstName = 'Hanzala'
// lastName = 'Khan'

// fullName = firstName+ ' ' + lastName
// fullName = `${firstName } ${lastName}`


// var num = '299'
// num = Number(num)

// console.log(typeof num)


const resturant = {
    name : 'Resturant',
    address : `${Math.floor(Math.random()*100)+1} Johnson Ave`,
    city:'Brooklyn',
    state:'NY',
    zipcode:'11206'
}


const fullAddres = `${resturant.address}, ${resturant.city}, ${resturant.state} ${resturant.zipcode}`
console.log(fullAddres)

resturant.openingTime = 'Mon-Fri'
console.log(resturant)