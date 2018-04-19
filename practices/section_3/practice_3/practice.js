function getSite(collection_c, item){
	return collection_c.findIndex( (obj)=>{
		return obj.key === item;
	})
}
//把他们的count，满3减1
function getCount(count){
	return parseInt(count / 3);
}
//统计出A集合中相同的元素的个数，形成C集合，C集合中的元素要形如{key:\"a\", count: 3}
function getSameElementsCount(collection){
	let result = [];
	collection.forEach( (item)=>{
		let site = getSite(result, item);
		if(site === -1)
			result.push({key:item, count:1});
		else
			result[site].count += 1;
	})
	return result;
}
function create_updated_collection(collection_a, object_b) {
  //然后选出C集合中的元素的key属性跟B对象中value属性中的元素相同的元素
  let collection_c = getSameElementsCount(collection_a);
	collection_c.forEach( (item)=>{
		if(object_b.value.indexOf(item.key) !== -1)
			item.count -= getCount(item.count);
	})
	return collection_c;
}

module.exports = create_updated_collection;
