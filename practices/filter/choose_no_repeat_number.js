'use strict';

function choose_no_repeat_number(collection) {

  //从collection中选出不重复的数字
  let result = [];
  collection.forEach((item) => {
    if (result.indexOf(item) === -1) {
      result.push(item);
    }
  });
  return result;
}

module.exports = choose_no_repeat_number;
