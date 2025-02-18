

function marks(mark) {
    var grade = 'defa'
    switch (true) {
        case mark >= 90: {
            grade = 'A'
            return grade
        }
        case mark >= 80: {
            grade = "B"
            return grade
        }
        case mark >= 70: {
            grade = "C"
            return grade
        }
        case mark >= 60: {
            grade = 'D'
            return grade
        }
        default: {
            grade = 'F'
            return grade

        }
    }
}
// result = []
// for (let i = 0; i <= 100; i++) {
//     let mark = Math.floor(Math.random() * 100)
//     result.push([mark,marks(mark)])
//     // console.log(`Marks = ${mark} Grade = ${marks(mark)}`)
// }
// console.table(result)


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

function Alarm(dayOfWeek) {
    var alarm = ''
    switch (dayOfWeek) {
        case 'Saturday':
        case 'Sunday': {
            alarm = 'wake at 10 am'
            break
        }
        case 'Monday': {
            alarm = 'wake at 8 am'
            break
        }
        case 'Tuesday':
        case 'Wednesday': {
            alarm = "wake at 9 am"
            break
        }
        case 'Thursday': {
            alarm = 'wake at 9.30 am'
            break
        }
        case 'Friday':
            alarm = 'wake at 8.30 am'
            break
        default:
            alarm = 'Invalid Day of week'
    }
    return alarm

}
days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', "Saturday", "Sunday"]

for (let i = 0; i < days.length; i++) {
    console.log(`Day = ${days[i]} Alarm = ${Alarm(days[i])}`)
}
