// forEach ==> কোনো কিছু রির্টান করে না ।

// const numbers = [1,2,3,4,5,6,7,];
// numbers.forEach(number => console.log(number));

// const numbers = [1,2,3,4,5,6,7,];
// const newNumbers = numbers.forEach(number => number)
// console.log(newNumbers);

// const numbers = [10, 40, 20, 80, 50,];
// numbers.forEach((number, index, array) => {
//     console.log(number, index, array);
// })

// map ==> এরে রির্টান করে ।

// const numbers = [1,2,3,4,5,6,7,];
// numbers.map(number => console.log(number));

// const numbers = [1,2,3,4,5,6,7,];
// const newNumbers = numbers.map(number => number*2)
// console.log(newNumbers);

const numbers = [10, 40, 20, 80, 50,];
numbers.map((number, index, array) => {
    console.log(number, index, array);
})
