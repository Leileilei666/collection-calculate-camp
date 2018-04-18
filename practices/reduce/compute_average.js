'use strict';

function compute_average(collection) {
  //计算给定数字集合元素的平均值
  let sum = collection.reduce( (sum , item)=>sum += item)
	return sum/collection.length;
}

module.exports = compute_average;

