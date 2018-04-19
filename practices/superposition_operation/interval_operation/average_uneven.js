'use strict';

function average_uneven(collection) {

  //collection里的奇数算平均数
  let sum = 0 ;
	let count = 0;
	collection.forEach( (item)=>{
		if( item % 2 !== 0 ){
			count += 1;
			sum += item;
		}
	})
	return (sum / count );
}

module.exports = average_uneven;
