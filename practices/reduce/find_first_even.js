'use strict';

function find_first_even(collection) {
  //找出给定集合元素的第一个偶数
  let firstEvent;
  for (let firstEvent of collection) {
    if (firstEvent % 2 === 0) {
      return firstEvent;
      break;
    }
  }
}

module.exports = find_first_even;

