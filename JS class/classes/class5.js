// for loops
// for(let i = 1;i<=10;i++){
//     console.log(`5 x ${i} = ${5*i}`)
// }

// for (let i = 1;i<=20;i++){
//     console.log(i)
// // }
// n  = 10
// sum = 0
// for(let i = 1;i<=n;i++){
//     sum+=i
// }
// console.log(sum)


// for (let i = 20;i>=1;--i){
//     console.log(i)
// }


// for (var i=0;i<=40;i+=2){
//     if (i%5!=0){
//         console.log(i)
//     }
// }
// console.log(i)

for(let n=1;n<=10;n+=1){
    i = n*10
    console.log(`Checkpoint ${i}`)
    if (i==50){
        console.log('Halfway there !')
        continue
    }
    else if (i ==100){
        console.log('you made it')
        continue
    }
}
console.log('All done')
