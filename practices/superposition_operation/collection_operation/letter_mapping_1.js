'use strict';

function even_to_letter(collection) {
  //数组的每个偶数映射为字母
  let result = collection.filter(function (item) {
    if (item % 2 === 0)
      return item;
  }).map(function (item) {
    return String.fromCharCode(item + 97 - 1);
  })
  return result;
}

module.exports = even_to_letter;
