function isEmptyObj(obj) {
  if (Object.keys) {
    return Object.keys(obj).length === 0 && obj.constructor === Object
  } else {
    return Object.prototype.toString.call(obj) === '[object Object]' && JSON.stringify(obj) === '{}'
  }
}
function isRepeat(arr) {
  let hash = {}
  for(let i in arr) {
    if(hash[arr[i]]) {
      return true
    }
    hash[arr[i]] = true
  }
  return false
}

module.exports = {
  isEmptyObj,
  isRepeat
}