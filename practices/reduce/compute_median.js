'use strict';

function compute_median(collection) {
  
  collection = collection.sort( (it , me)=>{
		return it - me;
	})
	if( collection.length % 2 === 0)//计算给定偶数个数字的集合的中位数
		return ( collection[collection.length / 2 - 1] + collection[collection.length / 2 ] ) / 2;  
	else
		return collection[parseInt(collection.length / 2 - 1)];//计算给定奇数个数字的集合的中位数
}

module.exports = compute_median;


