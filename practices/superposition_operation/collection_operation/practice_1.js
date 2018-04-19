'use strict';

function hybrid_operation(collection) {

  /*每一个数*3+2再算总和
  reduce()方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，
  最终计算为一个值
  sum 初始值
  item 当前元素*/
  return collection.reduce( (sum , item)=>{
		return sum + item * 3 + 2 ; 
	}, 0)
}

module.exports = hybrid_operation;

