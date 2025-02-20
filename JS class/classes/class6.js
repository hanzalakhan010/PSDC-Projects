// // while loop
// i = 0
// while (i<=5){
//     console.log(i)
//     i++
    
// }

function game(){

    const prompt = require('prompt-sync')()
    guess = 0
    
    play = true
    while(play){
        target = Math.floor(Math.random()*10)+1
        guess = parseInt(prompt('Enter a number : '))
        if (guess === target ){
            console.log('You guessed it right')
            askPlay = prompt('Do you want to play again type y else n: ')
            if (askPlay ==='n'){
                play = false
            }
        }
        else if (guess>target){
            console.log('Guess is too big')
        }
        else{
            console.log('Guess is too small')
        }
    }
}



// let values = ['A','B',"C"]

// for (let i =0;i<values.length;i++){
//     console.log(values[i])
// }
// index = 0
// while(index<values.length){
//     console.log(values[index])
//     index++
// }

// values.map((ele)=>{
//     console.log(ele)
// })

// let values = {
//     a:1,b:2,c:3
// }

// // for 
// keys = Object.keys(values)
// for (let i =0;i<keys.length;i++){
//     console.log(values[keys[i]])
// }

library = [
    {title:'Hanzala',author:"hanzala",yearPublished:2000},
    {title:'Ubada',author:"AuthorUbada",yearPublished:2010},
    {title:'Ahmed',author:"AuthorAhmed",yearPublished:1910},
]

library.push({
    title:'System Design',
    author:'Hanzala',
    yearPublished: new Date().getFullYear()
})

for(let i = 0;i<library.length;i++){
    if (library[i].title == 'System Design'){
        console.log(library[i])
    }
}

function removeByTitle(title){
    for(let )
}

