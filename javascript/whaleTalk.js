//let input = 'Learn JavaScript';
//let input = 'turpentine and turtles';
//let input = 'Hi, Human';
let input = 'a whale of a deal!';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];
for (let i = 0; i < input.length; i++) {
  //console.log('i is ' + i);
  for (let j = 0; j < vowels.length; j++) {
    //console.log('j is ' + j);
    
    // the long version of the condition if
/*    if (input[i] === vowels[j]){
       if(input[i] === 'e' || input[i] === 'u'){
          resultArray.push(input[i] + input[i]);
        } else{
          resultArray.push(input[i]);
        }
       }  */
    
    // the short version of the condition if
      if (input[i] === vowels[j]) {
         resultArray.push(vowels[j]);
      } 
      }
  }
console.log("'" + input + "' in WHALE is: " + resultArray.join('').toUpperCase());
