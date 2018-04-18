'use strict';

function find_last_even(collection) {
  //找出给定集合元素的最后一个偶数
  for (let i = collection.length - 1;i >= 0; --i ) {
    if (collection[i] % 2 === 0) {
      return collection[i];
      break;
    }
  }
  return;
}

module.exports = find_last_even;
