function create_updated_collection(collection_a, object_b) {
  //选出A集合中元素的key属性跟B对象中value属性中的元素相同的元素
  collection_a.forEach( (item)=>{
		if(object_b.value.indexOf(item.key) !== -1)
			item.count -= 1;  //把他们的count-1
	})
	return collection_a;//输出减过之后的新A集合
}

module.exports = create_updated_collection;
