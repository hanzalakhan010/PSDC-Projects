// IF ELSE 

// userLogin = -0
// if (userLogin){
//     console.log('if statement')
// }
// else{
//     // console.log('if statement')

// }

// Exeercise

// userLoggedIn = true
// // userSubscription = 'pro'
// userSubscription = 'basic'

// if (userLoggedIn) {
//     if (userSubscription == 'pro') {
//         console.log('Thanks, you are a pro subscriber')
//     }
//     else {
//         console.log('Here is your data, consder subscribing to pro to get acces to pro features')
//     }
// }
// else {
//     console.log('Please log in first')
// }





// for loops


// Marksheet
// 90=a
// 80=b
// 70=c
// 60=d
// >60 =f

// let marks = 90
// function marks(marks) {
//     let grade
//     if (marks >= 90) {
//         grade = 'A'
//         return grade

//     }
//     if (marks >= 80) {
//         grade = "B"
//         return grade
//     }
//     if (marks >= 70) {
//         grade = 'C'
//         return grade
//     }
//     if (marks >= 60) {
//         grade = 'D'
//         return grade
//     }
//     else {

//     }
//     if (marks < 60) {
//         grade = 'F'
//         return grade
//     }
// }
function marks(marks) {
    if (marks >= 60) {
        grade = "D"
    }
    if (marks >= 70) {
        grade = 'C'
    }
    if (marks >= 80) {
        grade = "B"
    }
    if (marks >= 90) {
        grade = 'A'
    }
    else {    
        grade = 'F'
    }
    return grade
}

for (let i = 0; i <= 100; i++) {
    mark = Math.floor(Math.random() * 100)
    console.log(`Marks = ${mark} Grade = ${marks(mark)}`)
}