const { default: expect } = require('expect');
const stringLength = require('./stringLength');

test('validates the length of a string', () => {
 expect(stringLength('hello')).toBeGreaterThan(1);
 expect(stringLength('hello')).toBeLessThan(10);
});