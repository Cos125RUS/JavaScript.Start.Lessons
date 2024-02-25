const array = [1, 2, 3, 10, 15];

console.log(array.map(item => item*2));
console.log(array.filter(item => item >= 10));
console.log(array.some(item => item >= 10));
console.log(array.find(item => item >= 10));
console.log(array.reduce((acc, item) => acc + item)/array.length);