// constant variable Kelvin
const kelvin = 300;
// variable Celsius (kelvin-273)
let celsius = kelvin - 273;
//variable Newton (celsius * (33/100))
let newton = Math.floor(celsius *  (33/100));
// variable Fahrenheit (celsius*(9/5)+32)
// using Math.floor() to round down the Cahrenheit temperature
let fahrenheit = Math.floor(celsius * (9/5) + 32);
// log the temperature in Kelvin to the console
console.log(`The temperature is ${kelvin} degrees Kelvin`);
// log the temperature in Celsius to the console
console.log(`The temperature is ${celsius} degrees Celsius`);
// log the temperature in Newton to the console
console.log(`The temperature is ${newton} degrees Newton`);
// log the temperature in Fahrenheit to the console
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
