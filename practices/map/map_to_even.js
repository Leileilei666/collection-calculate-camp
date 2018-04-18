'use strict';
//将集合A中得元素映射成集合B中的元素
function map_to_even(collection){
  return collection.map((item)=>item * 2)
}
module.exports = map_to_even;
