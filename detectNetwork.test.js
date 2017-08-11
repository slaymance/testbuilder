/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
// var FILL_ME_IN = 'Fill this value in';
/* 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 
  
  it('Throws an error so it fails', function() {
    throw new Error('Delete me!');
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });
  
  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
*/
function chaiExpectTest(prefix, length, cardNumber, expectedOutput) {
  var expect = chai.expect;
  it(`has a prefix of ${prefix} and a length of ${length}`, function () {
    expect(detectNetwork(cardNumber)).to.equal(expectedOutput);
  });
}

function testEachCardDetect(testPrefix, testLength, expectedOutput) {
  testPrefix.forEach(function(prefix) {
    testLength.forEach(function(length) {
      let cardNumber = prefix + '0'.repeat(length - prefix.length);
      chaiExpectTest(prefix, length, cardNumber, expectedOutput);
    });
  });
}

for (var network in creditCards) {
  describe(network, function() {
    var creditCard = creditCards[network];
    testEachCardDetect(creditCard.prefixes, creditCard.lengths, network);
  });
}