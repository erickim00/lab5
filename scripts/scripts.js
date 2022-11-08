


// let acit1620 = {
//     code: "ACIT 1620", 
//     name: "Fundamental Web Technologies",
// }

// let acit1515 = {
//     code: "ACIT 1515", 
//     name: "Scripting for IT",
// }

// let comm1116 = {
//     code: "COMM 1116", 
//     name: "Business Communications",
// }

// const courseList = [acit1620, acit1515, comm1116]


let input = "";
do{
    input = prompt("Enter a four digit number: ");
} while ((isNaN(input)) || input.length != 4);


//     for(let course of courseList)
//     {
//         if (input in course)
//         console.log(`Yes I am taking the course: ${course.code} - ${course.name}`)
