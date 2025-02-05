// 2/4/25
// Array vs object
// var let const


fruits  =[
    'Banana',
    'Appple',
    'Orange'
]


cart = [
    {
        productName:'pen',
        quantity:10,
        manafacturer:'Signature',
        price:10
    },
    {
        productName:'calculator',
        quantity:1,
        manafacturer:'Calola',
        price:100
    },
    {
        productName:'notepad',
        quantity:2,
        manafacturer:'gaba',
        price:50
    }
]




{
    var laptop = "HP Elite"
    let manafacturer = "HP"
    const pi = 3.14
    // manafacturer outside this scope is undefined
}


console.log(laptop)
// console.log(manafacturer) // this will throw error
