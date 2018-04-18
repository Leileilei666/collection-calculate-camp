'use strict';

function double_to_one(collection) {

  //把二维数组变成一维数组,消除重复,按照第一次出现的顺序排列最后的输出结果
  let result = [];
	collection.forEach( (item)=>{
		if(typeof(item) === 'number'){
			if( result.indexOf(item) === -1)
				result.push(item);
		} 
		else{
			item.forEach( (num)=>{
				if(result.indexOf(num) === -1)
					result.push(num);
			})
		}
	})
	return result;
}

module.exports = double_to_one;
