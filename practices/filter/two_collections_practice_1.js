'use strict';

function choose_common_elements(collection_a, collection_b) {

  //选出A集合中与B集合中的共有元素
  return collection_a.filter((item)=>{
    return collection_b.indexOf(item) !== -1;
  })
}

module.exports = choose_common_elements;
