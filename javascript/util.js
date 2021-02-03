function isEmptyObj(obj) {
  if (Object.keys) {
    return Object.keys(obj).length === 0 && obj.constructor === Object
  } else {
    return Object.prototype.toString.call(obj) === '[object Object]' && JSON.stringify(obj) === '{}'
  }
}
function isRepeatArr(arr) {
  let hash = {}
  for(let i in arr) {
    if(hash[arr[i]]) {
      return true
    }
    hash[arr[i]] = true
  }
  return false
}
function isArray(value) {
    if (typeof Array.isArray === "function") {
      return Array.isArray(value);
    } else {
      return Object.prototype.toString.call(value) === "[object Array]";
    }
}

module.exports = {
  isEmptyObj,
  isRepeatArr,
  isArray
}
