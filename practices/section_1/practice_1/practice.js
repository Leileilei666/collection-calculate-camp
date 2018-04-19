function collect_same_elements(collection_a, collection_b) {
  //选出A集合中与B集合中相同的元素
  let result = [];
  collection_a.forEach(item =>{
    for (let term of collection_b) {
        //console.log(term);term集合B的元素
     if(item === term) {
       result.push(item);
     }
  }

  //console.log(item);item集合A的元素
  });
  return result;
}

module.exports = collect_same_elements;
