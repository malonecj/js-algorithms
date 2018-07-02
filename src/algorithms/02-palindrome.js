import {reverse} from './reverse';

export const isPalindrome = test => {
  for (let i = 0; i < test.length / 2; i ++) {
    if (test[i] !== test[test.length - i - 1]) {
      return false;
      break;
    }
    return true;
  }
}

export const isPalindrome2 = test => test === reverse(test);
