'use strict';

function collect_max_number(collection) {
  //选出给定数字集合元素的最大值
  return collection.reduce( (max,item)=>{
		if( max < item )
			max = item;
		return max;
	})
}

module.exports = collect_max_number;
