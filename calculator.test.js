const { default: expect } = require('expect');
const Calculator = require('./calculator');

test('Testing calculator addition', () => {
    expect(Calculator.add(10, 5)).toBe(15);
});

test('Testing calculator subtraction', () => {
    expect(Calculator.subtract(10, 5)).toBe(5);
});

test('Testing calculator division', () => {
    expect(Calculator.divide(10, 5)).toBe(2);
});

test('Testing calculator Multiplication', () => {
    expect(Calculator.multiply(10, 5)).toBe(50);
});