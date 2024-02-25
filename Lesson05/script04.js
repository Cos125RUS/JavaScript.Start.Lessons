const student = {
    firstName: "Ivan",
    lastName: "Petrov",
    age: 21,
};

const { firstName: studentName, lastName, age = 20 } = student;
const students = ["Ivanov", "Petrov", "Belkin"];
const [student1, student2, student3] = students;

console.log(student);
console.log(student1);
console.log(studentName);
console.log(lastName);
console.log(age);