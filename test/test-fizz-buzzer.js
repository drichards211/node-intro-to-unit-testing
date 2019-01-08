const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
  it('should return "fizz" if num is divisible by 3, return "buzz" if num is divisible by 5, and return "fizz-buzz" if num is divisible by 3 and 5.', function() {
    const normalCases = [
      {num: 3, expected: 'fizz'},
      {num: 6, expected: 'fizz'},
      {num: 5, expected: 'buzz'},
      {num: 10, expected: 'buzz'},
      {num: 15, expected: 'fizz-buzz'},
    ]
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    })
  })
  it('should throw an error if num isn\'t a number', function() {
    const badInputs = ['potato', false, undefined,]
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input)
      }).to.throw(Error)
    })
  })
})