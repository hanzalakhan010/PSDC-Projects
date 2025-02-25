// let a = 2
// let b = 3
// let c = 'hanzala'
// console.log(c+a+b)


// sen = sen.split()
// sen.splice(sen.indexOf('o',2,'*'))
// console.log(sen)

// let sen = 'world'
// for(lel i =0;i<sen.length;)

let email = 'hanzalakhan.private@gmail.com'
tokens = email.split('@')
let newEmail = ''
if (tokens[0].length>2){
    // for(let i=0;i<tokens[0].length;i++){
    //     newEmail+=
    // }

    newEmail+=tokens[0][0]
    for(let i = 0;i<tokens[0].length-2;i++)
        newEmail+='*'
    newEmail+=tokens[0][tokens[0].length-1]
    newEmail+='@'


}
else{
    newEmail = email
}

newEmail+=tokens[1]
console.log(newEmail)

// 3d array
// values accession
let str = "Hanzala Khan"
let newStr = ''
for (let chr of str){
    newStr = chr+newStr
}
// console.log(newStr)

// arr = [1,2,3,4]
// for (let value of arr){
//     console.log(value)
// }
// arr = [1,2,3,4]
// console.log(Array(arr).keys())


obj = {
    a:1,
    b:2,
    c:3,
    d:4
}


for (let key in obj){
    console.log(obj[key])
}