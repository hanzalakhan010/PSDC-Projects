const student = {
    name : "Hanzala Khan",
    age:19,
    subjects :['Physics','Maths',"IT"],
    isEnrolled:true
}


// console.log(Object.keys(student))

// Object.keys(student).map((key)=>{
//     console.log(`${key}: ${student[key]}`)
// })

console.log(`Name: ${student.name}`)
console.log(`Age: ${student.age}`)
console.log(`Subjects : ${student.subjects}`)
console.log(`Is Enrolled : ${student.isEnrolled}`)


student.grade = 'A'
student.isEnrolled = false