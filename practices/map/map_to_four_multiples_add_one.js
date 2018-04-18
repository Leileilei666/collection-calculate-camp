'use strict';
//将集合A中得元素映射成集合B中的元素,四倍加一
var map_to_four_multiples_add_one = function(collection){
  return collection.map((item)=>item * 4 + 1)
};

module.exports = map_to_four_multiples_add_one;
