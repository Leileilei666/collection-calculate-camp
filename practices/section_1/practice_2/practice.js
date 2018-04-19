function collect_same_elements(collection_a, collection_b) {
  //选出A集合中与B集合中**子数组**的元素相同的元素
  let result = [];
  collection_a.forEach(item =>{
    for (let term of collection_b[0]) {
      if (item === term) {
        result.push(item);
      }
  }
  });
  return result;
}

module.exports = collect_same_elements;
