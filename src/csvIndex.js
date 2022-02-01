//Ignore this file, the relevant code is in index.js

// var fs = require('fs');
var wordList = require('wordlist-english'); //This library contains words arranged according to the word length

var totalWords =[];
var words = wordList['english/american'];
totalWords.push(...words); //spread operator to handle multiple elements
// words = wordList['english/american/20'];
// totalWords.push(...words); //spread operator to handle multiple elements
// words = wordList['english/american/35'];
// totalWords.push(...words); //spread operator to handle multiple elements
// words = wordList['english/american/40'];
// totalWords.push(...words); //spread operator to handle multiple elements
// words = wordList['english/american/50'];
// totalWords.push(...words); //spread operator to handle multiple elements
// words = wordList['english/american/55'];
// totalWords.push(...words); //spread operator to handle multiple elements
// words = wordList['english/american/60'];
totalWords.push(...words); //spread operator to handle multiple elements
// for(let i=100;i<110;i++)
// {
// 	console.log(words[i]);
// }
console.log(totalWords.length);

// // console.log(letterArray);
const wordsOfFive = totalWords.filter((word)=>{return word.length==5}); //Filtering the array to keep only words of length 5
var letterArray = wordsOfFive.map((word)=>{return word.split('')}); //Converting the wordList string array to an array of characters of each word
console.log(letterArray.length);
for(let i=0;i<wordsOfFive.length;i++)
{
	console.log(letterArray[i]);
}