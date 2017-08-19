// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var creditCards = {};

function createCreditCard(network, prefixes, lengths) {
  creditCards[network] = {
    prefixes: prefixes,
    lengths: lengths
  };
}

function addPrefixRange(creditCard, min, max) {
  for (var prefix = min; prefix <= max; prefix++) {
    creditCard.prefixes.push(JSON.stringify(prefix));
  }
}

function addLengthRange(creditCard, min, max) {
  for (var length = min; length <= max; length++) {
    creditCard.lengths.push(length);
  }
}

createCreditCard('Diner\'s Club',
                 ['38', '39'],
                 [14]);

createCreditCard('American Express',
                 ['34', '37'],
                 [15]);

createCreditCard('Switch',
                 ['4903', '4905', '4911', '4936', '4936', '6333', '6759', '564182', '633110'],
                 [16, 18, 19]);

createCreditCard('Visa',
                 ['4'],
                 [13, 16, 19]);

createCreditCard('MasterCard',
                 [],
                 [16]);
                 addPrefixRange(creditCards['MasterCard'], 51, 55);

createCreditCard('Discover',
                 ['65', '6011'],
                 [16, 19]);
                 addPrefixRange(creditCards['Discover'], 644, 649);

createCreditCard('Maestro',
                 ['5018', '5020', '5038', '6304'],
                 []);
                 addLengthRange(creditCards['Maestro'], 12, 19);

createCreditCard('China UnionPay',
                 [],
                 []);
                 addPrefixRange(creditCards['China UnionPay'], 624, 626);
                 addPrefixRange(creditCards['China UnionPay'], 6282, 6288);
                 addPrefixRange(creditCards['China UnionPay'], 622126, 622925);
                 addLengthRange(creditCards['China UnionPay'], 16, 19);

function detectNetwork(cardNumber) {
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
                        cardArray.slice(0, 5).join(''),
                        cardArray.slice(0, 6).join('')];

  function checkPrefixMatch(prefix) {
    return prefix === slicedPrefixes[prefix.length - 1];
  }

  function checkCardType(cardPrefixes, cardLengths) {
    for (var prefix in cardPrefixes) {
      if (checkPrefixMatch(cardPrefixes[prefix]) && cardLengths.includes(cardArray.length)) {
        return true;
      }
    }
  }

  for (var network in creditCards) {
    var creditCard = creditCards[network];
    if (checkCardType(creditCard.prefixes, creditCard.lengths)) {
      return network;
    }
  }

  return 'Not a valid credit card number';
};