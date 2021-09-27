const { test } = require('@jest/globals');
const randomString = require('../index');

describe('Test functionality of randomString',() => {
  test('Test Functional', () => {
    expect( typeof (randomString()) ).toBe('string');
  });


  test(`Verify that one city doesn\'t exist`, () => {
    expect(randomString()).not.toMatch(/Barinas/);
  });
});
