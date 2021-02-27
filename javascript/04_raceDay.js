let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
let runnersAge = 18;
if (runnersAge >= 18 && registeredEarly === true) {
  raceNumber += 1000;
  console.log(`Your number is ${raceNumber} and you will race at 9:30 am.`);
}
else if (runnersAge >= 18 && registeredEarly === false) {
 console.log(`Your number is ${raceNumber} and you will race at 11:00 am.`); 
}
else {
  console.log(`Your number is ${raceNumber} and you will race at 12:30 am.`); 
}
