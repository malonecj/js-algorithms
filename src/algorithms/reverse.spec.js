import {reverse, reverse2, reverse3} from './reverse';

describe('Reverse', () => {
  const testString = 'Hello Worlds';
  const expectedResult = 'sdlroW olleH';

  it('should reverse a string using built in reverse method', () => {
    expect(reverse(testString)).toBe(expectedResult);
  });

  it('should reverse a string using for of loop', () => {
    expect(reverse2(testString)).toBe(expectedResult);
  });

  it('should reverse a string using reduce method', () => {
    expect(reverse3(testString)).toBe(expectedResult);
  });


});