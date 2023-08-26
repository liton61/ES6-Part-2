const students = [
    {name : 'Liton', email : 'liton@gmail.com', avg : 60, percentage : 60},
    {name : 'Rohan', email : 'rohan@gmail.com', avg : 51, percentage : 50},
    {name : 'Shakib', email : 'shakib@gmail.com', avg : 53, percentage : 58},
    {name : 'Mamun', email : 'mamun@gmail.com', avg : 58, percentage : 49},
    {name : 'Salam', email : 'salam@gmail.com', avg : 55, percentage : 52},
]
const scic = students.filter((s) => s.avg >= 50 && s.percentage >= 50);
const studentName = scic.map((st) => st.name)
console.log(studentName);