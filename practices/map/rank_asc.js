'use strict';
//从大到小排序
var rank_asc = function(collection){
  return collection.sort((item,result)=> result - item)
};

module.exports = rank_asc;
