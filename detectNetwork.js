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

  var cardArray = cardNumber.split('').map(Number)
  if (cardArray.includes(NaN)) {
    alert('Please enter a valid credit card number')
  }

  var slicedPrefixes = [cardArray.slice(0, 1).join(''),
                        cardArray.slice(0, 2).join(''),
                        cardArray.slice(0, 3).join(''),
                        cardArray.slice(0, 4).join(''),
                        cardArray.slice(0, 6).join('')];

  function checkCardType(cardPrefixes, cardLengths) {
    for (var prefix in cardPrefixes) {
      if (slicedPrefixes.includes(cardPrefixes[prefix]) && cardLengths.includes(cardArray.length)) {
        return true;
      }
    }
  }

  var dinersOutput = 'Diner\'s Club';
  var dinersPrefixes = ['38', '39'];
  var dinersLengths = [14];
  if (checkCardType(dinersPrefixes, dinersLengths)) {
    return dinersOutput;
  }

  var amexOutput = 'American Express';
  var amexPrefixes = ['34', '37'];
  var amexLengths = [15];
  if (checkCardType(amexPrefixes, amexLengths)) {
    return amexOutput;
  }

  var switchOutput = 'Switch';
  var switchPrefixes = ['4903', '4905', '4911', '4936', '6333', '6759', '564182', '633110'];
  var switchLengths = [16, 18, 19];
  if (checkCardType(switchPrefixes, switchLengths)) {
    return switchOutput;
  }

  var visaOutput = 'Visa';
  var visaPrefixes = ['4'];
  var visaLengths = [13, 16, 19];
  if (checkCardType(visaPrefixes, visaLengths)) {
    return visaOutput;
  }

  var masterOutput = 'MasterCard';
  var masterPrefixes = [];
  var masterLengths = [16];
  for (var prefix = 51; prefix <= 55; prefix++) {
    masterPrefixes.push(JSON.stringify(prefix));
  }
  if (checkCardType(masterPrefixes, masterLengths)) {
    return masterOutput;
  }

  var discoverOutput = 'Discover';
  var discoverPrefixes = ['65', '6011'];
  var discoverLengths = [16, 19];
  for (var prefix = 644; prefix <= 649; prefix++) {
    discoverPrefixes.push(JSON.stringify(prefix));
  }
  if (checkCardType(discoverPrefixes, discoverLengths)) {
    return discoverOutput;
  }

  var maestroOutput = 'Maestro';
  var maestroPrefixes = ['5018', '5020', '5038', '6304'];
  var maestroLengths = [];
  for (var length = 12; length <= 19; length++) {
    maestroLengths.push(length);
  }
  if (checkCardType(maestroPrefixes, maestroLengths)) {
    return maestroOutput;
  }

  var chinaOutput = 'China UnionPay';
  var chinaPrefixes = [];
  var chinaLengths = [];
  for (var prefix = 624; prefix <= 626; prefix++) {
    chinaPrefixes.push(JSON.stringify(prefix));
  }
  for (var prefix = 6282; prefix <= 6288; prefix++) {
    chinaPrefixes.push(JSON.stringify(prefix));
  }
  for (var prefix = 622126; prefix <= 622925; prefix++) {
    chinaPrefixes.push(JSON.stringify(prefix));
  }
  for (var length = 16; length <= 19; length++) {
    chinaLengths.push(length);
  }
  if (checkCardType(chinaPrefixes, chinaLengths)) {
    return chinaOutput;
  }

  return 'Not a valid credit card number';
};