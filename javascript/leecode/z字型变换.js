/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (s.length <= numRows || numRows === 1) {
    return s
  }
  let res = new Array(numRows).fill('')
  let num = 0
  let flag = true
  for (let i = 0; i < s.length; i++) {
    res[num] += s[i]
    if (flag) {
      num += 1
    } else {
      num -= 1
    }
    if (num === 0) {
      flag = true
    }
    if (num === numRows - 1) {
      flag = false
    }
  }
  return res.join('')
};