'use strict';

function choose_even(collection) {

  //从collection中选出偶数
  return collection.filter((even)=>even % 2 === 0)
}

module.exports = choose_even;
