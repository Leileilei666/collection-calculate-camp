'use strict';

function calculate_elements_sum(collection, element) {
  //找出某元素在给定集合中的最后一个下标
  return collection.lastIndexOf(element);
}

module.exports = calculate_elements_sum;
