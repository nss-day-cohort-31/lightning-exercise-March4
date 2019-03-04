let students = [];


let student1 = {
    name: "Joe Smith",
    subject: "Math",
    score: 65
}

let student2 = {
    name: "Ann Jones",
    subject: "English",
    score: 90
}

let student3 = {
    name: "Andrew Johnson",
    subject: "Math",
    score: 70
}

let student4 = {
    name: "Betty Smithson",
    subject: "History",
    score: 80
}

let student5 = {
    name: "Bob Jackson",
    subject: "Science",
    score: 50
}

function addStudent(student){
    students.push(student);
}
addStudent(student1);
addStudent(student2);
addStudent(student3);
addStudent(student4);
addStudent(student5);
 console.log(students);


for(let i = 0; i <students.length; i++){
    if(students[i].score >= 70){
        console.log(`${students[i].name} has a score of ${students[i].score} in ${students[i].subject}`)
    }
}

let totalScore = 0;
for(let i = 0; i <students.length; i++){
    totalScore += students[i].score;
}

let avgScore = totalScore/students.length;
console.log(avgScore);