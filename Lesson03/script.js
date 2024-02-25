// function helloName(name) {
//     console.log('Hello,', name);
// }

// helloName("Valerii");

// let count = 5;

// function counter() {
//     return count++;
// }

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());



// let age = Number(prompt('How you old?'));

// function upAge() {
//     return age + 5;
// }

// console.log(`After 5 year your age is ${upAge()}`);

// const lvlUpAge = () => age + 5;

// console.log(`After 5 year your age is ${lvlUpAge()}`);


// function hello() {
//     console.log("Hello, Function");
// }

// hello();


// const sum = (param1, param2) => param1 + param2;
// console.log(sum(5, 2));

const userMoney = Number(prompt("How money you'r salary?"));

const salary = (money) => {
    money *= 0.87;
    return money * 0.75;
}

let moneyMonth = salary(userMoney);

console.log(`Free money for yourself: ${moneyMonth}`);
console.log(`For eat: ${moneyMonth * 0.3}`);