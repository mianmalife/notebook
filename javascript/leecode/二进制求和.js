/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  // 'ob'表示二进制
  a = 'ob' + a
  b = 'ob' + b
  let sum = BigInt(a) + BigInt(b)
  return sum.toString(2)
  // // 求最大长度
  // const maxLen = Math.max(a.length, b.length)
  // // 前端补0
  // a = a.padStart(maxLen, '0')
  // b = b.padStart(maxLen, '0')
  // // 是否进位 默认false
  // let carry = false
  // // 构造结果数组
  // let result = Array.from({ length: maxLen }, v => 0)
  // // 遍历两个字符串
  // for (let i = maxLen - 1; i >= 0; i--) {
  //   let tmpa = a[i] || 0, tmpb = b[i] || 0
  //   result[i] = +tmpa + +tmpb + (carry ? 1 : 0)
  //   // 相加大于等于2的 下次求和要加1
  //   carry = result[i] >= 2
  //   result[i] %= 2
  // }
  // // 最后要进位的前端要加1
  // return (carry ? '1' : '') + result.join('')
};
console.log(addBinary('1010', '1011'))
console.log(addBinary('11', '1'))