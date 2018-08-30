const repeat = (opt, num) => {
  if (num >= 0) {
    opt(num - 1);
  }
}

module.exports = repeat;