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