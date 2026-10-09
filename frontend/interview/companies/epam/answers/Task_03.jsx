const getUniqArray = (arr) => {
  return [...new Set(array)];
};

const getSortedArray = (arr) => {
  return arr.sort((a, b) => a - b);
  // toSorted - if we need avoid mutation
};

const getSum = (arr) => {
  return arr.reduce((accum, value) => accum + value, 0);
};