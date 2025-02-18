

function marks(mark){
    var grade = 'defa'
    switch(true){
    case mark>=90:{
        grade = 'A'
        return grade
    }
    case mark>=80:{
        grade = "B"
        return grade
    }
    case mark>=70:{
        grade = "C"
        return grade
    }
    case mark>=60:{
        grade = 'D'
        return grade
    }
    default:{
        grade = 'F'
        return grade

    }
}
}
for (let i = 0; i <= 100; i++) {
    let mark = Math.floor(Math.random() * 100)
    console.log(`Marks = ${mark} Grade = ${marks(mark)}`)
}


// let trafficLight = 'green'
// let message = ''

// switch(trafficLight){
//     case "green":
//         message = 'proceed to drive'
    
//     case 'yellow':
//         message = 'prepare to stop'
    
//     case "red":
//         message = 'Stop Immediately'
    
//     default:
//         message = 'Invalid color'
    
// }
// console.log(message)