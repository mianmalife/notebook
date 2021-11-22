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

// 匹配十六进制字符
// 十六进制表示[0-9a-fA-F]
const HexRegx = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g
const hex = '#fff #f2f2f2 #333'
console.log(hex.match(HexRegx))

// 匹配时间 23:59

const TIMEREGX = /^([01][0-9]|[2][0-3]):[0-5][0-9]$/g

console.log(TIMEREGX.test('00:00')) // true
console.log(TIMEREGX.test('22:00')) // false ?
console.log('21:09'.match(TIMEREGX)) // [ '21:09' ]

// 匹配 7:9 8:9

const TIMEREGX_S = /^(0?[0-9]|1[0-9]|[2][0-3]):(0?[0-9]|[1-5][1-9])$/g

console.log('8:9'.match(TIMEREGX_S)) // [ '8:9' ]

// 匹配yyyy-mm-dd
// 2021-11-17
const date = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[0-1])$/

console.log(date.test('2021-11-17'))  // true
console.log(date.test('2022-01-31')) // true
console.log(date.test('9022-12-31')) // true
console.log(date.test('9022-22-31')) // false

// D:\code\JavaScript正则表达式迷你书（1.1版）.pdf
// D:\  [a-zA-Z]:\\   \要转义
// code\  ([^\\:*<>|"?\r\n/]+\\)* ([^\\:*<>|"?\r\n/]+)?   不能包含特殊字符 文件名至少一个字符 可能多个文件夹 可能是文件 code
const WIN = /^[a-zA-Z]:\\([^\\:*<>|"?\r\n/]+\\)*([^\\:*<>|"?\r\n/]+)?$/

console.log(WIN.test('D:\\code\\JavaScript正则表达式迷你书（1.1版）.pdf '), 'win')

// 匹配window系统操作系统路径
// D:\code\JavaScript正则表达式迷你书（1.1版）.pdf
// 1. D:\    [a-zA-Z]:\\   \要转义
// 2. code\   ([^\\:*?"<>|\r\n/]+\\)*  可能多个文件夹 + 文件夹名至少一个字符
// 3. JavaScript正则表达式迷你书（1.1版）.pdf ([^\\:*?<>|\r\n/]+)?  可能是文件 code
const win = /^[a-zA-Z]:\\([^\\:*?"<>|\r\n/]+\\)*([^\\:*?"<>|\r\n/]+)?/

console.log(win.test('D:\\code\\npm-package-some\\node_modules\\ansi-styles'), 'win2')

const ele = '<div id="main" class="wrapper"></div>'
const ELE = /id=".*"/g

// id="  .是通配符 也匹配" *又是贪婪的 所以有下面结果
console.log(ele.match(ELE)) // [ 'id="main" class="wrapper"' ]

const ELE_REGX = /id=".*?"/g // 效率低

const ELE_REGX2 = /id="[^"]*"/
console.log(ele.match(ELE_REGX)) // [ 'id="main"' ] // [ 'id="main"' ]

// 匹配开头
// ^(脱字符)匹配开头 在多行匹配中匹配开头
// $(美元符号)匹配结尾 在多行匹配中匹配结尾

console.log('hello'.replace(/^|$/g, '*')) // *hello*
console.log('hello\nworld\n'.replace(/^|$/gm, '@'))
// @hello@
// @world@
// @

// \b 单词边界  也就是\w与\W之间的位置 或者\w与^之间的位置 或者\w与$之间的位置
let world = 'hello world hello everyone!'
let world2 = '[hello world]!world'
console.log(world.replace(/\b/g,'#'))
// #hello# #world# #hello# #everyone#!
// 1.^与\w之间的位置
// 2.\w与\W之间的位置
// 3.\W与\w之间的位置
// 4. ...
// 5. ...
// 8. \w与\W之间的位置
console.log(world2.replace(/\b/g, '#'))
// #hello# #world#!#world#

// \B 非单词边界 与\b相反
console.log(world2.replace(/\B/g, '#'))
// let world2 = '[hello world]!world'
// #[h#e#l#l#o w#o#r#l#d]#!w#o#r#l#d

// (?=p) 正向先行断言
// 匹配p前面的位置
console.log('Uzi jakelove'.replace(/(?=j)|(?=i)/g, '&'))
// Uz&i &jakelove

// (?!p) 负向先行断言 正向先行断言的相反匹配

console.log('Uzi jakelove'.replace(/(?!j)/g, '&'))
// &U&z&i& j&a&k&e&l&o&v&e&

// (?<=p) 和 (?<!p) ????
// 不匹配任何东西的正则  /.^/

console.log('122133456'.replace(/(?!^)(?=(\d{3})+$)/g, ','))
// 122,133,456
console.log('12213 34563 2342344'.replace(/(?!\b)(?=(\d{3})+\b)/g, ','))
// 12,213 34,563 2,342,344

// (?!\b)  不是\b前面的位置 其实就是\B
console.log('231321 42343 434'.replace(/\B(?=(\d{3})+\b)/g, ','))
// 231,321 42,343 434

// 货币格式化
// 2899
function formatMoney(num) {
  return num.toFixed(2).replace(/\B(?=(\d{3})+\b)/g, ',').replace(/^/, '$ ')
}
console.log(formatMoney(2899))

const password = /^[0-9a-zA-Z]{6,12}$/g

// 必须包含数字和小写字母
const password2 = /(?=.*[0-9])(?=.*[a-z])^[0-9a-zA-Z]{6,12}$/g

// 至少包含两种字符
const passwordQ = /(?!^[0-9]{6,12}$)(?!^[a-z]{6,12}$)(?!^[A-Z]{6,12}$)^[a-zA-Z0-9]{6,12}$/g

console.log(passwordQ.test('1234567')) // false
console.log(passwordQ.test('1234w67')) // true
console.log(passwordQ.test('wwwfdds')) // false
console.log(passwordQ.test('EERVSDDDFD')) // false
console.log(passwordQ.test('EERVSD2DFD')) // true

// 括号
// 1.分组 2.子表达式 3.引用 4.反向引用 5.提取数据
// 分支结构..
const fzstr = 'hello world hello javascript'
console.log(fzstr.match(/hello world|javascript/g)) // [ 'hello world', 'javascript' ]
console.log(fzstr.match(/hello (world|javascript)/g)) // [ 'hello world', 'hello javascript' ]
// 匹配yyyy-mm-dd
const DateFReg = /(\d{4})-(\d{2})-(\d{2})/g // [ '2021-11-22' ]
console.log('2021-11-22'.match(DateFReg))
// console.log(DateFReg.exec('2021-11-22'))
// [
//   '2021-11-22',
//   '2021',
//   '11',
//   '22',
//   index: 0,
//   input: '2021-11-22',
//   groups: undefined
// ]
DateFReg.test('2021-11-22')
console.log(RegExp.$1) // 2021
console.log(RegExp.$2) // 11
console.log(RegExp.$3) // 22
console.log('2021-11-22'.replace(DateFReg, '$2/$3/$1')) // 11/22/2021
// 同时匹配yyyy-mm-dd yyyy.mm.dd yyyy/mm/dd
const allDate = /\d{4}(-|\/|\.)\d{2}(-|\/|\.)\d{2}/
console.log(allDate.test('2021-11-22')) // true
console.log(allDate.test('2021-11/22')) // true x
// 反向引用 \1 \2 \3... \1 匹配第一个分组 \2 匹配第二个分组... 
// \1表示引用之前的分组(这里下面是-的时候,\1下来仍会匹配-)
const allDateYes = /\d{4}(-|\/|\.)\d{2}\1\d{2}/
console.log(allDateYes.test('2021-11/22')) // false √
// 括号嵌套 以左括号为准
const testQt = /^((\d)(\d(\d)))\1\2\3\4$/
//const testQt =/^((\d)(\d(\d)))\1\2\3\4$/
console.log(testQt.test('1231231233'))
console.log(RegExp.$1) // 123
console.log(RegExp.$2) // 1
console.log(RegExp.$3) // 23
console.log(RegExp.$4) // 3
// 如果真要匹配 \1 和 0 的话，请使用 (?:\1)0 或者 \1(?:0)
// 分组+量词 分组匹配的是   最后一个字符
const last = /(\d)+/
console.log('123456'.match(last))
// [ '123456', '6', index: 0, input: '123456', groups: undefined ] \d 最后一次匹配的数字是6
const last1 = /(\d)+ \1/
console.log(last1.test('123456 1')) // false
console.log(last1.test('123456 6')) // true

// 非捕获括号 括号最原始功能 不捕获 不反向引用
const fbx = /(?:ab)+/g
console.log('abac ababab acabab'.match(fbx)) // [ 'ab', 'ababab', 'abab' ]
const fbf = /hello (?:world|javascript)/g
console.log('hello world hello javascript'.match(fbf)) // [ 'hello world', 'hello javascript' ]
// 39