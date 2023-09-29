const palindromes = function (str) {
  const reverseStr = str.toLowerCase("").replace(/[^a-z0-9]/g, "");
  return reverseStr.split("").reverse().join("") === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
