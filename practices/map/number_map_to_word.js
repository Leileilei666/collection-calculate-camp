'use strict';
//数字映射为字母
var number_map_to_word = function(collection){
  return collection.map((item)=>String.fromCharCode(item + 96))
};

module.exports = number_map_to_word;
