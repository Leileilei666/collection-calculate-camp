
function getSite(result,item){
	return result.findIndex( (obj)=>{
		return obj.key === item[0];
	})
}
function getNum(item){
	let num = 1;
	if( item.length !== 1)
		num = parseInt(item.match(/[0-9]+/)[0]);
	return num;
}
function count_same_elements(collection) {
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

module.exports = count_same_elements;
