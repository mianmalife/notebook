/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let result = []
  nums1.map(n => {
    const index = nums2.findIndex((it => it === n))
    const value = nums2.slice(index + 1).find(v => v > n)
    result.push(value ? value : -1)
  })
  return result
};
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]))

var next = function (nums1, nums2) {
  let m = nums1.length
  let n = nums2.length
  let res = new Array(m).fill(0)
  for (let i; i < m; ++i) {
    let j = 0
    while (j < n && nums1[i] !== nums2[j]) {
      ++j;
    }
    let k = j + 1
    while (k < n && nums2[k] < nums2[j]) {
      ++k
    }
    res[i] = k < n ? nums2[k] : -1
  }
  return res
}

var nextGreaterElement1 = function(nums1, nums2) {
  const map = new Map();
  const stack = [];
  for (let i = nums2.length - 1; i >= 0; --i) {
      const num = nums2[i];
      while (stack.length && num >= stack[stack.length - 1]) {
          stack.pop();
      }
      map.set(num, stack.length ? stack[stack.length - 1] : -1);
      stack.push(num);
      console.log(stack, 'stack')
  }
  console.log(map)
  const res = new Array(nums1.length).fill(0).map((_, i) => map.get(nums1[i]));
  return res;
};

console.log(nextGreaterElement1([4,1,2], [1,3,4,2]))
// const mapObj = new Map()
// let str = 'map key'
// let func = () => {}
// let num = 7
// let obj = {}
// mapObj.set(str, 'mapvalue')
// mapObj.set(func, 'hello')
// mapObj.set(num, num)
// mapObj.set(obj, 'world')
// console.log(mapObj)

// console.log(mapObj.get({})) // undefined
// console.log(mapObj.get(() => {})) // undefined
// console.log(mapObj.get(str)) // 'mapvalue'

// for(let [key, value] of mapObj) {
//   console.log(key, value, 'key-value')
// }
// for(let key of mapObj.keys()) {
//   console.log(key, 'key')
// }
// for(let value of mapObj.values()) {
//   console.log(value, 'value')
// }
// for(let [key, value] of mapObj.entries()) {
//   console.log(key, value, 'entries')
// }

// console.log(new Array(5).fill(0))