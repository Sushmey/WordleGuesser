var wordList = require('word-list-json'); //This library contains words arranged according to the word length

var letterArray = wordList.filter((letter)=>{return letter.length==5}); //Filtering the array to keep only words of length 5
const wordsOfFive = letterArray.map((word)=>{return word.split('')}); //Converting the letterArray string array to an array of characters of each word
const isSubset= (word, guess)=>{
  // returns true if guess is a subset of word
  return guess.every((element)=>{
    return word.includes(element);
  });
}

//We need a function which checks if guess is a subset of the wordsOfFive but we also need to maintain the order
//We'll just join the char array to a string and then use includes function to check if it contains

const isSubsetOrdered= (wordArray, guess)=>{
  // returns true if guess is a subset of word
  const word = wordArray.filter((word) => {word.trim().length>0}); //removing all spaces
  return guess.every(()=>{
    return word.join('').includes(guess.join(''));
  });
}


const containsLetter= (word, guess)=>{
  // returns true if word contains any letter from excluded letters
  return guess.some((element)=>{
    return word.includes(element);
  });
}



const suggestionsDiv = document.getElementById("suggestions"); //Getting the div from html where we will display the words 
document.guessFunction = ()=>{
	suggestionsDiv.innerHTML = ""; //Clearing the div
	document.getElementById("footer").classList.remove("fixMe"); //Cosmetic
	var ctr=0;//Counter to keep track of how many words are displayed so far
	var exclude = document.getElementById("exclude").value.toLowerCase().trim();
	var guessedWord = document.getElementById("guess").value.toLowerCase().trim(); //Taking input from the html
	suggestionsDiv.classList.add("border","border-1","dotted","boxy"); //Adding classes dynamically
	if(guessedWord.length==0) //validation to check if empty 
	{
		suggestionsDiv.append(document.createTextNode("Add some letters! \n"));
	}
	else
	{
		var guess = guessedWord.split(''); //Splitting the word to char array
		var excluded =exclude.length==0?['/']:exclude.split(''); //If empty then adding an array that will never be a subset
		for(let i =0;i<wordsOfFive.length;i++)
		{
			if(isSubset(wordsOfFive[i], guess) && !containsLetter(wordsOfFive[i],excluded)) 
			{
					suggestionsDiv.append(document.createTextNode(wordsOfFive[i].join('')+"\n"));
					ctr++; //Counter to keep track of how many words are displayed so far
			}
		}
		if(ctr==0) //To show something when there are no words found
		{
			suggestionsDiv.append(document.createTextNode("No words found :(\n"));
		}
	}
};







/*
TODO:
Trim inputs - DONE
Validation to check if guess text is empty - DONE
Validation to check if exclude text is empty - DONE
Something to display if no words found - DONE
Validation for checking if input contains anything other than words - It anyway gives false so no need. - DONE
Validation to check that guess text length isn't greater than 5 - No need since isSubset still works - DONE

Add way to input ordered letters so suggested words are more accurate
*/



