var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0
  }
  if (nums.length === 1) {
    return 1
  }
  let i = 0
  let j = 1
  while (j < nums.length) {
    if (nums[i] !== nums[j]) {
      i += 1
      nums[i] = nums[j]
    }
    j++
  }
  nums.splice(i + 1, j - i)
  return i + 1
}
console.log(removeDuplicates([1, 1, 2, 3, 3, 3]))