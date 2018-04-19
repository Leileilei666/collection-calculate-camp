'use strict';

function hybrid_operation_to_uneven(collection) {

  //每一个奇数*3+5再求总和
  let result = 0;
	collection.forEach( (item)=>{
		if( item % 2 !== 0 )
			result += item * 3 + 5;
	})
	return result;
}

module.exports = hybrid_operation_to_uneven;

