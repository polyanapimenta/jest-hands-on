/* eslint-disable no-undef */
const calc = require('./calc');

describe('calculator', () => {

  describe('shoud perform addition', () => {  
    it('adds two positive numbers', () => {
      expect(calc.add(1,2)).toEqual(3);
    });

    it('adds two negative numbers', () => {
      expect(calc.add(-1, -2)).toEqual(-3);
    });

    it('adds one positive number and one negative number', () => {
      expect(calc.add(2, -3)).toEqual(-1);
    });
  });
  
  describe('shoud perform multiplication', () => {
    // add some test case
    it('multiplies two positive numbers', () => {
      expect(calc.multiply(2, 4)).toEqual(8);
    });

    it('multiplies two negative numbers', () => {
      expect(calc.multiply(-2, -5)).toEqual(10);
    });

    it ('multiplies one positive number and one negative number', () => {
      expect(calc.multiply(5, -3)).toEqual(-15);
    })
  });

  describe('shoud perform division', () => {
    // add some test case
  });

  describe('shoud perform subtraction', () => {
    // adde some test case
  });
});
