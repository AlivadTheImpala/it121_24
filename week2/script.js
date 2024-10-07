/* // script.js
Author: Brandon Davila
Date: Oct 02, 2024 */
/* 

If a word begins with a vowel, append 'way' to the end of the word: apple --> appleway

If a word begins with one consonant, move that letter to the end and append 'ay':
pig latin --> igpay atinlay

If a word begins with two consonants, move both letters to the end and append 'ay':
grade --> adegray 

*/

let userInput = prompt("Enter a word to translate into Pig Latin.");
let vowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"];
let firstLetter = userInput.charAt(0);
let secondLetter = userInput.charAt(1);

// first we check if there is no userInput. We prompt the user to enter a word to continue.
if (userInput == " " || userInput == "") {
  console.log("please enter a word.");
  document.write("please enter a word.");
  // we check if the first letter is a vowel. and create a switch to handle different cases.
} else {
  let isVowel = vowels.includes(firstLetter) ? true : false;
  console.log("First Letter is a vowel: ", isVowel);
  // when the first letter is a vowel, all we do is append "way" to the end.
  switch (isVowel) {
    case true:
      let wayify = userInput + "way";
      console.log(wayify);
      document.write(wayify);
      break;
    /* // when the first letter is anything other than a vowel, we can check if the second letter is a vowel.  If it is than we infer that the word only begins with one consonant*/
    case false:
      if (vowels.includes(secondLetter)) {
        let firstConsonant = userInput.slice(0, 1).toLowerCase();
        let restOfWord = userInput.slice(1);
        console.log(firstConsonant);
        console.log(restOfWord);
        document.write(restOfWord, firstConsonant, "ay");
        // otherwise, the first two letter are consonants.
      } else {
        let pairedConsonant = userInput.slice(0, 2).toLowerCase();
        let restOfWord = userInput.slice(2);
        console.log(pairedConsonant, restOfWord);
        document.write(restOfWord, pairedConsonant, "ay");
      }
  }
}

// if (vowels.includes(firstLetter)) {
//   imAVowel = 0;
//   let wayify = userInput + "way";

//   console.log(wayify);

//   let message = `You entered ${userInput}. This translates to ${wayify} in Pig Latin.`;
//   document.write(message);
// } else {
//   imAConsonant = 1;
//   console.log(imAConsonant);
// }

console.log("the first letter is: ", firstLetter);
console.log("the second letter is: ", secondLetter);
