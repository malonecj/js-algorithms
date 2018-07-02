export const reverse = input => 
  input
  .split('')
  .reverse()
  .join('');

export const reverse2 = input => {
  let result = '';
  for (let character of input) {
    result = character + result;
  }
  return result;
}

export const reverse3 = input => 
  input
  .split('')
  .reduce((result, character) => character + result, '');
