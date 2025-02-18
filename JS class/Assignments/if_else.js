// IF ELSE 

// userLogin = -0
// if (userLogin){
//     console.log('if statement')
// }
// else{
//     // console.log('if statement')

// }

// Exercise

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
// function marks(marks) {
//     if (marks >= 60) {
//         grade = "D"
//     }
//     if (marks >= 70) {
//         grade = 'C'
//     }
//     if (marks >= 80) {
//         grade = "B"
//     }
//     if (marks >= 90) {
//         grade = 'A'
//     }
//     else {    
//         grade = 'F'
//     }
//     return grade
// // }

function unitTestingMarks(result) {
    for (let i = 0; i <= result.length; i++) {
        switch (true) {
            case result[i][0] >= 90: {
                if (result[i][1] == 'A') {
                    console.log('Correct')
                }
                break
            }
            case result[i][0] >= 80: {
                if (result[i][1] == 'B') {
                    console.log('Correct')
                }
                break
            }
            case result[i][0] >= 70 :{
                if (result[i][1] == 'C'){
                    console.log('Correct')
                }
                break
            }
            case result[i][0] >= 60 :{
                if (result[i][1] == 'D'){
                    console.log('Correct')
                }
                break
            }
            default:{
                if((result[i][0]<60)&&(result[i][1]=='F')){
                    console.log('Correct')
                }
                else{
                    console.error('Wrong')
                }
            }
        }
    }
}


function marks(marks) {
    if ((marks >= 90)) {
        grade = "A"
    }
    else if (marks >= 80) {
        grade = 'B'
    }
    else if (marks >= 70) {
        grade = "C"
    }
    else if (marks >= 60) {
        grade = 'D'
    }
    else {
        grade = 'F'
    }

    return grade
}
result = []
for (let i = 0; i <= 100; i++) {
    let mark = Math.floor(Math.random() * 100)
    result.push([mark, marks(mark)])
    // console.log(`Marks = ${mark} Grade = ${marks(mark)}`)
}

// console.table(result)
// 
unitTestingMarks(result)

