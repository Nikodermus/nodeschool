function countWords(inputWords) {
  return inputWords.reduce((obj, elem) => {
    obj[elem] = obj[elem] + 1 || 1;
    return obj
  }, {})
}

module.exports = countWords