function reduce(arr, fn, initial) {
  const length = arr.length;
  let counter = 0;
  let accumulator;
  while (counter < length) {
    accumulator = fn(arr[counter], initial, counter, arr);
    counter = +1;
  }
  return accumulator;
}

module.exports = reduce