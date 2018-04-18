'use strict';

function compare_collections(collection_a, collection_b) {
  //判断两个集合是否相同
  if (collection_a.toString() === collection_b.toString())
  return true;
else
  return false;
}

module.exports = compare_collections;


