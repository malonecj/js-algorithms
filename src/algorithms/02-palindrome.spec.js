import {isPalindrome, isPalindrome2} from './02-palindrome';

describe('is palindrome', () => {


  it('returns true when word is palidrome', () => {
    const test = 'navan';
    expect(isPalindrome(test)).toBe(true);
    expect(isPalindrome2(test)).toBe(true);
  });

  it('returns false when word is palidrome', () => {
    const test = 'not a palidrome';
    expect(isPalindrome(test)).toBe(false);
    expect(isPalindrome2(test)).toBe(false);    
  });
});