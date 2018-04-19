function collect_same_elements(collection_a, object_b) {
  //选出A集合中元素的key属性，跟B对象中value属性中的元素相同的元素
  let result = [];
  collection_a.forEach(item =>{
    if (object_b.value.includes(item.key))
      result.push(item.key);
  });
  return result;
}

module.exports = collect_same_elements;
