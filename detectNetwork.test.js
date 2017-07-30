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

describe('Diner\'s Club', function() {
  var expect = chai.expect;
  var expectedOutput = 'Diner\'s Club';

  var testPrefix = ['38', '39'];
  var testLength = [14];

  testPrefix.forEach(function(prefix) {
    testLength.forEach(function(length) {
      let cardNumber = prefix + '0'.repeat(length - prefix.length);

      it(`has a prefix of ${prefix} and a length of ${length}`, function() {
        expect(detectNetwork(cardNumber)).to.equal(expectedOutput);
      });
    });
  });
});

describe('American Express', function() {
  var expect = chai.expect;
  var expectedOutput = 'American Express';

  var testPrefix = ['34', '37'];
  var testLength = [15];

  testPrefix.forEach(function(prefix) {
    testLength.forEach(function(length) {
      let cardNumber = prefix + '0'.repeat(length - prefix.length);

      it(`has a prefix of ${prefix} and a length of ${length}`, function() {
        expect(detectNetwork(cardNumber)).to.equal(expectedOutput);
      });
    });
  });
});

describe('Visa', function() {
  var expect = chai.expect;
  var expectedOutput = 'Visa';

  var testPrefix = ['4'];
  var testLength = [13, 16, 19];

  testPrefix.forEach(function(prefix) {
    testLength.forEach(function(length) {
      let cardNumber = prefix + '0'.repeat(length - prefix.length);

      it(`has a prefix of ${prefix} and a length of ${length}`, function() {
        expect(detectNetwork(cardNumber)).to.equal(expectedOutput);
      });
    });
  });
});

describe('MasterCard', function() {
  var expect = chai.expect;
  var expectedOutput = 'MasterCard';

  var testPrefix = [];
  var testLength = [16];

  for (var addPrefix = 51; addPrefix <= 55; addPrefix++) {
    testPrefix.push(JSON.stringify(addPrefix));
  }

  testPrefix.forEach(function(prefix) {
    testLength.forEach(function(length) {
      let cardNumber = prefix + '0'.repeat(length - prefix.length);

      it(`has a prefix of ${prefix} and a length of ${length}`, function() {
        expect(detectNetwork(cardNumber)).to.equal(expectedOutput);
      });
    });
  });
});

describe('Discover', function() {
  var expect = chai.expect;
  var expectedOutput = 'Discover';

  var testPrefix = ['65', '6011'];
  var testLength = [16, 19];

  for (var addPrefix = 644; addPrefix <= 649; addPrefix++) {
    testPrefix.push(JSON.stringify(addPrefix));
  }

  testPrefix.forEach(function(prefix) {
    testLength.forEach(function(length) {
      let cardNumber = prefix + '0'.repeat(length - prefix.length);

      it(`has a prefix of ${prefix} and a length of ${length}`, function() {
        expect(detectNetwork(cardNumber)).to.equal(expectedOutput);
      });
    });
  });
});

describe('Maestro', function() {
  var expect = chai.expect;
  var expectedOutput = 'Maestro';

  var testPrefix = ['5018', '5020', '5038', '6304'];
  var testLength = [];

  for (var addLength = 12; addLength <= 19; addLength++) {
    testLength.push(JSON.stringify(addLength));
  }

  testPrefix.forEach(function(prefix) {
    testLength.forEach(function(length) {
      let cardNumber = prefix + '0'.repeat(length - prefix.length);

      it(`has a prefix of ${prefix} and a length of ${length}`, function() {
        expect(detectNetwork(cardNumber)).to.equal(expectedOutput);
      });
    });
  });
});

describe('China UnionPay', function() {
  var expect = chai.expect;
  var expectedOutput = 'China UnionPay';

  var testPrefix = [];
  var testLength = [];

  for (var addPrefix = 624; addPrefix <= 626; addPrefix++) {
    testPrefix.push(JSON.stringify(addPrefix));
  }

  for (var addPrefix = 6282; addPrefix <= 6288; addPrefix++) {
    testPrefix.push(JSON.stringify(addPrefix));
  }

  for (var addPrefix = 622126; addPrefix <= 622925; addPrefix++) {
    testPrefix.push(JSON.stringify(addPrefix));
  }

  for (var addLength = 16; addLength <= 19; addLength++) {
    testLength.push(JSON.stringify(addLength));
  }

  testPrefix.forEach(function(prefix) {
    testLength.forEach(function(length) {
      let cardNumber = prefix + '0'.repeat(length - prefix.length);

      it(`has a prefix of ${prefix} and a length of ${length}`, function() {
        expect(detectNetwork(cardNumber)).to.equal(expectedOutput);
      });
    });
  });
});

describe('Switch', function() {
  var expect = chai.expect;
  var expectedOutput = 'Switch';

  var testPrefix = ['4903', '4905', '4911', '4936', '564182', '633110', '6333',
    '6759'];
  var testLength = [16, 18, 19];

  testPrefix.forEach(function(prefix) {
    testLength.forEach(function(length) {
      let cardNumber = prefix + '0'.repeat(length - prefix.length);

      it(`has a prefix of ${prefix} and a length of ${length}`, function() {
        expect(detectNetwork(cardNumber)).to.equal(expectedOutput);
      });
    });
  });
});