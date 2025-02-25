// string methods
// 2d array
// functions
// let str = 'Furst Line \n new line \t tabbed'
// console.log(str)

// let path = 'c:\\Users\\name\\documents'
// console.log(path)

// let str = 'Should print something like:\n This is line one\n\tthis is line two with a tab'
// console.log(str)

// let str = 'i am hanzala khan'
// console.log(str.toLocaleUpperCase())

// let str2 = '\thanzala \t '
// console.log(str2.trim())
// let str1 = 'hello world'
// console.log(str1.split(''))

str2 = 'we are learning javascript'


function reverse(str){
    rev = ''
    for(let i = str.length ;i>=0;i--){
        // rev+=str2.slice(str2.length-i,1)
        rev += str.slice(i,i+1)
    }
    return rev
}
r = reverse(str2)
console.log(r)
console.log(reverse(r))