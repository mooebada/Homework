/**
 * This question is all about writing tests so the roles are reversed! We have provided a function and it is up to you to write the tests.
 * The function comment gives you an idea of what the function expects and what it should return.
 */

/**
 * This function returns a new array that is a deduplicated version of the combination of the two arrays.
 *
 * DO NOT EDIT THE FUNCTION, YOU ONLY WRITE THE TESTS
 */
const combineAndDeduplicate = (firstArr, secondArr) => {
  if (!Array.isArray(firstArr)) {
    if (Array.isArray(secondArr)) {
      return secondArr;
    } else {
      return [];
    }
  } else if (!Array.isArray(secondArr)) {
    if (Array.isArray(firstArr)) {
      return firstArr;
    } else {
      return [];
    }
  }

  const newArray = [...firstArr, ...secondArr];

  // This syntax will be new to you, it is a quick way to remove any duplicates from the newArray
  return [...new Set(newArray)];
};

/**
 * TEST CODE: ONLY EDIT THIS
 * We've provided some syntax for you but feel free to change it to your liking! It should follow jest syntax though!
 *
 * To run the test make sure you have done an `npm install` command in your terminal and then run `npm t` or `npm run test`
 */

describe('combineAndDeduplicate', () => {
  it('expect to be first array', () => {
    const firstArray = [1, 2, 3];
    expect(combineAndDeduplicate(firstArray)).toBe(firstArray);
    expect(combineAndDeduplicate(firstArray, null)).toBe(firstArray);
    expect(combineAndDeduplicate(firstArray, 'second')).toBe(firstArray);
  });

  it('expect to be second array', () => {
    const secondArray = [4, 5, 6];
    expect(combineAndDeduplicate(null, secondArray)).toBe(secondArray);
    expect(combineAndDeduplicate('firstArr', secondArray)).toBe(secondArray);
  });

  it('expect to be first & second array', () => {
    const firstArray = [1, 2, 3];
    const secondArray = [4, 5, 6];
    expect(combineAndDeduplicate(firstArray, secondArray)).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });

  it('expect to not deduplicate the elements array', () => {
    const firstArray = [1, 2, 3, 7, 8];
    const secondArray = [1, 2, 3, 4, 5, 6];
    expect(combineAndDeduplicate(firstArray, secondArray)).toEqual([
      1, 2, 3, 7, 8, 4, 5, 6,
    ]);
    expect(combineAndDeduplicate(firstArray, firstArray)).toEqual([
      1, 2, 3, 7, 8,
    ]);
    expect(combineAndDeduplicate(secondArray, secondArray)).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });
});
