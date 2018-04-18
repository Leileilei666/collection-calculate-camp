'use strict';

function choose_multiples_of_three(collection) {
  //从collection中选出3的倍数
  return collection.filter((item)=>item % 3 === 0);
}

module.exports = choose_multiples_of_three;
