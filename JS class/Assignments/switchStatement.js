

// grade
// switch(true){
//     case mark>=90:{
//         grade = 'A'
//         break
//     }
//     case mark>=80:{
//         grade = "B"
//         break
//     }
//     case mark>=70:{
//         grade = "C"
//         break
//     }
//     case mark>=60:{
//         grade = 'D'
//         break
//     }
//     default:{
//         grade = 'F'
//     }
// }
// for (let i = 0; i <= 100; i++) {
//     let mark = Math.floor(Math.random() * 100)
//     // result.push([mark, marks(mark)])
//     console.log(`Marks = ${mark} Grade = ${marks(mark)}`)
// }


let trafficLight = 'green'
let message = ''

switch(trafficLight){
    case "green":
        message = 'proceed to drive'
    
    case 'yellow':
        message = 'prepare to stop'
    
    case "red":
        message = 'Stop Immediately'
    
    default:
        message = 'Invalid color'
    
}
console.log(message)