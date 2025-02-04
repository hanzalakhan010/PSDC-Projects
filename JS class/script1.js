name_= 'Hanzala Khan'
age  = 19
pie = 3.14
isStudying = true

food = undefined
drink = null

// console.log(name_,age,pie,isStudying)

user1 = {
    name:'Hanzala Khan',
    age:19,
    isStudying:false,
    brotherName :'Ubada Khan'
}
user2 = {
    name: user1.brotherName,
    age : 10,
    isStudying:true
}

user1.brotherName = 'Ali'


console.log(user2.name,user1.brotherName)