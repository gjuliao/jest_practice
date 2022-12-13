const { default: expect } = require('expect');
const capitalize = require('./capitalize');

test('first letter capitalize from string', () => {
    expect(capitalize('juliao')).toMatch('Juliao');
})