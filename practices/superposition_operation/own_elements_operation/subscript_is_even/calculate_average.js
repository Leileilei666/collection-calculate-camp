'use strict';
var calculate_average = function(collection){
//计算第偶数个元素的平均数
    let sum = 0;
    let count = 0;
	collection.forEach( (item)=>{
		if( item % 2 === 0 ){
			count += 1;
			sum += item;
		}
	})
	return sum / count;
};
module.exports = calculate_average;
