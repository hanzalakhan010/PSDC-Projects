// add item to some index


let months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

months.splice(1, 0, ...["hanzala", 'Khan', 'ahmed'])



product1 = {
    name: 'Hp Elite book',
    inStock: true,
    price: 1000,
    totalUnits: 7,
    colors: ['black', 'white', 'gray']
}


product2 = {
    name: 'Hp Elite book',
    inStock: true,
    price: 1000,
    totalUnits: 7,
    colors: ['black', 'white', 'gray']
}

product3 = {
    name: 'Hp Elite book',
    inStock: true,
    price: 1000,
    totalUnits: 7,
    colors: ['black', 'white', 'gray']
}

products  = [product1,product2,product3]




resturant ={
    name:'Some Random Resturant',
    address: Math.floor(Math.random()*100),
    ctity:'Karachi',
    state:'NY',
    zipcode:'14234'
}
console.log(resturant)


for (let i =0;i<100;i++){
    console.log(Math.floor(Math.random()*500) +500)
}