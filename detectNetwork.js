// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  var splitArray = cardNumber.split('');
  var cardArray =[];
  for(var i = 0; i < splitArray.length; i++) {
  	cardArray.push(parseInt(splitArray[i]));
  }

  // Diner's Club and American Express
  if(cardArray[0] === 3) {
  	if(cardArray[1] === 8 || cardArray[1] === 9 && cardArray.length === 14) {
  		return "Diner's Club";
  	} else if(cardArray[1] === 4 || cardArray[1] === 7 && cardArray.length === 15) {
  		return 'American Express';
  	}
  }

  // Visa
  if(cardArray[0] === 4) {
  	if(cardArray.length === 13 || cardArray.length === 16 || cardArray.length === 19) {
  		return 'Visa';
  	}
  }

  // MasterCard
  if(cardArray.length === 16 && cardArray[0] === 5) {
  	if(cardArray[1] === 1 || cardArray[1] === 2 || cardArray[1] === 3 || cardArray[1] === 4 || cardArray[1] === 5) {
  		return 'MasterCard';
  	}
  }

  return 'Not a valid credit card number';
};