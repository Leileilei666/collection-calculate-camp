'use strict';

function collect_min_number(collection) {
  //选出给定数字集合元素的最小值
  return collection.reduce( (min,item)=>{
		if( min > item )
			min = item;
		return min;
	})
}

module.exports = collect_min_number;

