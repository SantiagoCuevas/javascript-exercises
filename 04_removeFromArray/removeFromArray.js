const removeFromArray = function (array, ...arg) {
  for (let i = 0; i < arg.length; i++) {
    const indexOfArg = array.indexOf(arg[i]);
    if (indexOfArg === -1) {
      continue;
    }
    array.splice(indexOfArg, 1);
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
