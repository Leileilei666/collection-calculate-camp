'use strict';

function get_union(collection_a, collection_b) {
  //弹出两个集合的并集
  collection_b.forEach( (item)=>{
		if(collection_a.indexOf(item) === -1)
			collection_a.push(item);
	})
	return collection_a;
}

module.exports = get_union;

