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

  var twoPrefix = parseInt(cardArray.slice(0, 2).join(''));
  var threePrefix = parseInt(cardArray.slice(0, 3).join(''));
  var fourPrefix = parseInt(cardArray.slice(0, 4).join(''));
  var sixPrefix = parseInt(cardArray.slice(0, 6).join(''));

  // Diner's Club
  var dinersLength = cardArray.length === 14;
  var dinersPrefix = twoPrefix >= 38 && twoPrefix <= 39
  if(dinersLength && dinersPrefix) {
    return 'Diner\'s Club';
  }

  // American Express
  var amexLength = cardArray.length === 15;
  var amexPrefix = twoPrefix === 34 || twoPrefix === 37;
  if(amexLength && amexPrefix) {
    return 'American Express';
  }

  // Visa
  var visaLength = cardArray.length === 13 || cardArray.length === 16 
    || cardArray.length === 19;
  var visaPrefix = cardArray[0] === 4 && fourPrefix !== 4903 && fourPrefix !== 
    4905 && fourPrefix !== 4911 && fourPrefix !== 4936;
  if(visaLength && visaPrefix) {
    return 'Visa';
  }

  // MasterCard
  var masterLength = cardArray.length === 16;
  var masterPrefix = twoPrefix >= 51 && twoPrefix <= 55;
  if(masterLength && masterPrefix) {
    return 'MasterCard'
  }

  // Discover
  var discoverLength = cardArray.length === 16 || cardArray.length === 19;
  var discoverPrefix = twoPrefix === 65 || threePrefix >= 644 && threePrefix <=
    649 || fourPrefix === 6011;
  if(discoverLength && discoverPrefix) {
    return 'Discover';
  }

  // Maestro
  var maestroLength = cardArray.length >= 12 && cardArray.length <= 19;
  var maestroPrefix = fourPrefix === 5018 || fourPrefix === 5020 
    || fourPrefix === 5038 || fourPrefix === 6304
  if(maestroLength && maestroPrefix) {
    return 'Maestro';
  }

  // China UnionPay
  var chinaLength = cardArray.length >= 16 && cardArray.length <= 19;
  var chinaPrefix = threePrefix >= 624 && threePrefix <= 626 || fourPrefix >= 
    6282 && fourPrefix <= 6288 || sixPrefix >= 622126 && sixPrefix <= 622925;
  if(chinaLength && chinaPrefix) {
    return 'China UnionPay';
  }

  // Switch
  var switchLength = cardArray.length === 16 || cardArray.length === 18 
    || cardArray.length === 19;
  var switchPrefix = fourPrefix === 4903 || fourPrefix === 4905 || fourPrefix 
    === 4911 || fourPrefix === 4936 || fourPrefix === 6333 || fourPrefix === 6759
    || sixPrefix === 564182 || sixPrefix === 633110;
  if(switchLength && switchPrefix) {
    return 'Switch';
  }

  return 'Not a valid credit card number';
};