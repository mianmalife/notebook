const ID_REG = /id=".*?"/
const ID_REG_GOOD = /id="[^"]*"/
const response = '<div id="container" class="wrapper"></div>'
console.log(response.match(ID_REG_GOOD)[0]) // id="container"

// {m, n}  量词 至少m个 最多n个 {3,6} 3-6个
const RegxOne = /haA{3,6}x/
const RegxTwo = /haA{3,6}/g
const str1 = 'haAAAx'
const str2 = 'haAAAxhaAAAAAhaxxhaAAAAAAx'
const str3 = 'haAAAx haAAAAA haxx haAAAAAAx'
console.log(str1.match(RegxOne), 1) // [ 'haAAAx', index: 0, input: 'haAAAx', groups: undefined ]
console.log(str1.match(RegxTwo), 2) // [ 'haAAA' ]
console.log(str2.match(RegxOne), 3) 
// [
//   'haAAAx',
//   index: 0,
//   input: 'haAAAxhaAAAAAhaxxhaAAAAAAx',
//   groups: undefined
// ]
console.log(str2.match(RegxOne), 4)
// [
//   'haAAAx',
//   index: 0,
//   input: 'haAAAxhaAAAAAhaxxhaAAAAAAx',
//   groups: undefined
// ]
console.log(str3.match(RegxTwo), 5) // [ 'haAAA', 'haAAAAA', 'haAAAAAA' ] 5

// 字符组[x,y,z] 匹配x,y,z其中一个

const STREG = /z[456]m/g

console.log('z4m'.match(STREG)) // ['z4m']
console.log('z456m'.match(STREG)) // null
console.log('z5m'.match(STREG)) // ['z5m']
console.log('z56m'.match(STREG)) // null
console.log('z6m'.match(STREG)) // ['z6m]

// 范围
const FW = /[1-9a-zA-Z_]/ // 匹配 数字大小字母 下划线  ===>  \w   world 单词
const WordReg = /\w/g
const WREG = /\w+/g
console.log(FW.test('123asdwA')) // true
console.log('world'.match(WordReg)) // [ 'w', 'o', 'r', 'l', 'd' ]
console.log('world'.match(WREG)) // [ 'world' ]
console.log('hello world'.match(WREG)) // [ 'hello', 'world' ]
// 匹配- 要么放最前面 要么最后面 要么转义 \
const GF = /-click/g
const GFH = /abc-/
const ZY = /a\-bc/
console.log('on-click'.match(GF)) // [ '-click' ]
console.log(GFH.test('abc-')) // true
console.log(ZY.test('a-bc')) // true

// 排除字符组 [^]

const PCZ = /[^best]/  // 不是b e s t 的任意字符

console.log(PCZ.test('A')) // true
console.log(PCZ.test('%&%')) // true
console.log(PCZ.test('t3s')) // true
console.log(PCZ.test('b')) // false
console.log(PCZ.test('e')) // false
console.log(PCZ.test('s')) // false
console.log(PCZ.test('t')) // false


// \d 数字字符
// \D 非数字字符
// \w 单词字符 ====> 数字字母下划线
// \W 非单词字符
// \s 空白符 包括空格、水平制表符、垂直制表符、换行符、回车符、换页符
// \S 非空白符
// . 几乎任意字符 ====> 占位符   换行符、回车符、行分隔符和段分隔符除外

// 任意字符表示法
//  [\d\D] 或者 [\w\W] 或者 [\s\S] 或者 [^]


// 量词

// {m}   -> {m, m}  出现m次
// {m,} 出现至少m次
// ?  有或者没有
// +  至少有一个
// *  任意次

// 贪婪匹配 尽可能多匹配
console.log('12 123 1234 12345 123456'.match(/\d{2,5}/g))
// [ '12', '123', '1234', '12345', '12345' ]

// 惰性匹配 尽可能少匹配
console.log('12 123 1234 123456'.match(/\d{2,5}?/g))
// ['12', '12', '12', '34', '12', '34', '56']

console.log('12 123 1234'.match(/\d+?/g))

console.log('12 123 1234'.match(/\d*?/g))

// 多选分支 任选其一
console.log('goodboy goodgirl'.match(/goodboy|goodgirl/g))
// [ 'goodboy', 'goodgirl' ]
console.log('good goodMan'.match(/good|goodMan/g))
// [ 'good', 'good' ]  -> 惰性的 匹配到good就不匹配了