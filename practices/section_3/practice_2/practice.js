function create_updated_collection(collection_a, object_b) {
    //选出A集合中元素的key属性跟B对象中value属性中的元素相同的元素
    collection_a.forEach( (item)=>{
      if(object_b.value.indexOf(item.key) !== -1)
        item.count -= getCount(item.count);  //把他们的count-1
    })
    return collection_a;//输出减过之后的新A集合

}
function getCount(count){
	return parseInt(count / 3);//parseInt(string, radix) 函数可解析一个字符串，并返回一个整数。
/*string,必需,要被解析的字符串。
  radix,选。表示要解析的数字的基数,该值介于 2 ~ 36 之间。
  如果省略该参数或其值为 0，则数字将以 10 为基础来解析。
*/
}
module.exports = create_updated_collection; 
