// constant variable myAge
const myAge = 41;
// variable earlyYears (will change leter)
let earlyYears = 2;
earlyYears *= 10.5;
//variable laterYears (myAge / 2)
let laterYears = myAge / 2;
// multiplying the laterYears by 4
laterYears *= 4;
// print earlyYears and laterYears to the console
console.log(`My age: ${myAge}.`);
console.log(`Early years: ${earlyYears}.`);
console.log(`Later years: ${laterYears}.`);
// adding earlyYears and laterYears together
let myAgeInDogYears = earlyYears + laterYears;
// string myName with lowercase letter (toLowerCase)
let name = 'Horea';
let myName = name.toLowerCase();
// displays my name and age in dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
