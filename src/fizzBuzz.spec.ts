import { expect } from 'chai';

import { fizzBuzz } from './fizzBuzz';

describe('fizzBuzz', function () {
  it('should throw an error if the input is not a number', function () {
    expect(() => fizzBuzz('foo' as undefined)).to.throw(
      Error,
      'input is not a number',
    );
  });

  it('should return FizzBuzz if input is divisible by 3 and 5', function () {
    expect(fizzBuzz(15)).to.eql('FizzBuzz');
  });

  it('should return Fizz if input is divisible by 3', function () {
    expect(fizzBuzz(9)).to.eql('Fizz');
  });

  it('should return Buzz if input is divisible by 5', function () {
    expect(fizzBuzz(10)).to.eql('Buzz');
  });

  it('should return the number if input is not divisible by 3 or 5', function () {
    expect(fizzBuzz(2)).to.eql('2');
  });
});
