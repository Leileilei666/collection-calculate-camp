'use strict';

function calculate_elements_sum(collection) {
  //计算给定集合元素的总和
  return collection.reduce( (sum , item)=>sum += item)
}

module.exports = calculate_elements_sum;

