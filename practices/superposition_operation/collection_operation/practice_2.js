'use strict';

function hybrid_operation_to_uneven(collection) {

  //每一个奇数*3+2
  let result =[];
	collection.forEach( (item)=>{
		if( item % 2 !== 0 )
			result.push( item * 3 + 2 )
	})
	return result;
}

module.exports = hybrid_operation_to_uneven;

