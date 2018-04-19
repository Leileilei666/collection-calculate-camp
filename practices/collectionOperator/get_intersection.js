'use strict';

function get_intersection(collection_a, collection_b) {
  //弹出两个集合的交集
  let collection_c = [];
	collection_b.forEach( (item)=>{
		if(collection_a.indexOf(item) !== -1)
			collection_c.push(item);
	})
	return collection_c;
}

module.exports = get_intersection;
