const person = {
    name : 'Liton',
    age : 22,
    id : 101,
    address : 'Dhaka',
    phone : '01XXX',
}
// const {name, phone} = person;
// console.log(name, phone);

const {name, age,...remaining} = person;
console.log(remaining);