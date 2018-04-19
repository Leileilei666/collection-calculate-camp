
function find(collection, keyCollection) {
  for (let item of collection) {
    if (item.key === keyCollection) {
      return item;
    }
  }
  return null;
}
function count_same_elements(collection) {
  //把A集合中相同的元素统计出数量
  let result = [];
  for(let item of collection){
    let resultObj = find(result,item);
    if(resultObj){
      resultObj.count ++;
    }else{
      result.push({key:item,count:1});
    }
  }
  return result;
}

module.exports = count_same_elements;
