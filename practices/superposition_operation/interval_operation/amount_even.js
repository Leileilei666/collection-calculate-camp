'use strict';

function amount_even(collection) {

  //数组collection里的偶数算总数
  let result = 0;
	collection.forEach( (item)=>{
		if( item % 2 === 0 )
			result += item;
	})
	return result;
}

module.exports = amount_even;
