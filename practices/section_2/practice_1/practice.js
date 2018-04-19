function count_same_elements(collection) {
  //把A集合中相同的元素统计出数量
  let result = [];
  let arr = [];
for (let i = 0; i < collection.length; i++) {
  if (!arr[collection[i]]) {
    arr[collection[i]] = {};
    arr[collection[i]].key = collection[i];
    arr[collection[i]].count = 1;  
  }else{
    arr[collection[i]].count++
  }
  
}
for (let i in arr) {
  result.push(arr[i]);
  
}

  return result;
}

module.exports = count_same_elements;
