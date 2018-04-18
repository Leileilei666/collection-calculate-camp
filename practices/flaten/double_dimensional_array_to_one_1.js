'use strict';

function double_to_one(collection) {

  //把二维数组变成一维数组
  let result = [];
	collection.forEach( (item)=>{
		result = result.concat(item)	
	})
	
	return result;
}

module.exports = double_to_one;
