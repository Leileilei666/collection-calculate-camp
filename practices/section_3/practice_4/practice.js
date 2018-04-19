
function getNum(letter){
	let num = 1;
	if(letter.length !== 1)
		num = parseInt(letter.match(/[0-9]+/));
	return num;
}    
//把他们的count，满3减1
function getCount(count){
	return parseInt(count / 3);
} 

function getSite(result, letter){
	return result.findIndex( (item)=>{
		return item.key === letter[0];
	})
}
///统计出A集合中相同的元素的个数,如果有-就把-右边的数字也计算入个数，形成C集合
function getSameElementsCount(collection){
	let result = [];
	collection.forEach( (item)=>{
		let site = getSite(result, item);
		if(site === -1)
			result.push({key:item[0], count:getNum(item)});
		else
			result[site].count += getNum(item);
	})
	return result;
}
//C集合中的元素要形如{key:\"a\", count: 3}，然后选出C集合中的元素的key属性跟B对象中value属性中的元素相同的元素
function create_updated_collection(collection_a, object_b) {
  let collection = getSameElementsCount(collection_a);
	collection.forEach( (item)=>{
		if( object_b.value.indexOf(item.key) !== -1)
			item.count -= getCount(item.count);
	})
	return collection;
}

module.exports = create_updated_collection;
