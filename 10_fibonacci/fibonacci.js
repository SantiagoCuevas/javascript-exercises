const fibonacci = function (num) {
  if (num < 0) {
    return "OOPS";
  }

  let fibonacciArr = [];

  for (let i = 0; i < num; i++) {
    i < 2
      ? fibonacciArr.push(1)
      : fibonacciArr.push(fibonacciArr[i - 1] + fibonacciArr[i - 2]);
  }
  return fibonacciArr[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
