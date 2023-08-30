const sumAll = function (val1, val2) {
  if (typeof val1 !== "number") {
    return "ERROR";
  } else if (typeof val2 !== "number") {
    return "ERROR";
  } else if ((val1 || val2) < 0) {
    return "ERROR";
  }

  let finalSum = 0;
  let biggerNum;
  let smallerNum;

  if (val1 < val2) {
    biggerNum = val2;
    smallerNum = val1;
  } else {
    biggerNum = val1;
    smallerNum = val2;
  }

  for (let i = smallerNum; i <= biggerNum; i++) {
    finalSum += i;
  }
  console.log("Sum", finalSum);
  return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
