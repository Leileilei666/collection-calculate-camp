'use strict';
//每一个数与下一个数相加，乘以3,最后一个数不算
function one_add_next_multiply_three(collection){
	let result = [];
	for (var i = 0; i < collection.length - 1; i++) {
		result.push((collection[i]+collection[i+1])*3)
	}
  return result;
}

module.exports = one_add_next_multiply_three;
