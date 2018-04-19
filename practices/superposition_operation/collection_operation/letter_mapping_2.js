'use strict';

function average_to_letter(collection) {

  //数组的平均数（如果是小数上取整）映射为字母
    //ceil() 方法可对一个数进行上舍入。
    //Math.ceil(x)
  let num = Math.ceil(collection.reduce (function(n1,n2) {
    return n1+n2;
  }) / collection.length);
  return String.fromCharCode(num + 97 -1);
}

module.exports = average_to_letter;

