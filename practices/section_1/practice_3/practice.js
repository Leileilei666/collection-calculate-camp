function collect_same_elements(collection_a, object_b) {
  //选出A集合中跟B对象中value属性中的元素相同的元素
  let resul = [];
  for (let item of collection_a) {
    if (object_b.value.includes(item))//includes()判断是否包含某一元素,返回TRUE or False
      resul.push(item);
  }
  return resul;
}

module.exports = collect_same_elements;
