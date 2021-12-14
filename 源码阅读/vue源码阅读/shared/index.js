// 冻结对象
let obj = Object.freeze({ name: 'freezeName' })
obj.age = 30
console.log(obj.age) // undefined
console.log(obj) // { name: 'freezeName' }
// 空函数 1.用于判断 条件 代码便于压缩
const NOOP = () => { }
let instance = {
  render: NOOP
}
let dev = true
if (dev) {
  instance.render = function () {
    console.log('render')
  }
}

if (instance.render === NOOP) {
  console.log('test')
}

// 一直返回false,便于压缩代码
const NO = () => false

// 判断是不是以on开头 且on后面首字母不是小写字母

// ^ 以什么开头 $ 以什么结尾
// ^ 在开头表示以什么结尾 其它表示非
const onRE = /^on[^a-z]/

const isOn = key => onRE.test(key)

console.log(isOn('onChange')) // true
console.log(isOn('onchange')) // false
console.log(isOn('onSize')) // true
console.log(isOn('on3change')) // true

// 判断是否以onUpdate:开头
const isModelListener = (key) => key.startsWith('onUpdate:')
console.log(isModelListener('onUpdate:yes')) // true
console.log(isModelListener('onupdate:no')) // false

// 合并
const extend = Object.assign

const nameObj = { name: 'rose' }

const newNameObj = extend(nameObj, { name: 'newRose', age: 32 })

console.log(nameObj) // { name: 'newRose', age: 32 }
console.log(newNameObj) // { name: 'newRose', age: 32 }

console.log(nameObj === newNameObj) // true

// 移除数组中某一项
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
// splice删除某一项 其它元素都会移位 很耗性能
// https://github.com/axios/axios/blob/master/lib/core/InterceptorManager.js
// axios拦截器数组中只是将要移除的项置为null 再遍历存在则执行函数

// hasOwn 是否是自身拥有的属性  不是继承的
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key)

console.log(hasOwn({ a: 1 }, 'a'), 'hasOwn') // true
console.log(hasOwn({ __proto__: { a: 3 } }, 'a'), 'hasOwn') // false
console.log(hasOwn({}, 'hasOwnProperty')) // false

// 判断是不是数组
const isArray$1 = Array.isArray;
const toTypeString$1 = val => Object.prototype.toString.call(val)
// 判断是不是Map Map是'值-值'的数据结构 key可以是任意类型
const isMap$1 = (val) => toTypeString$1(val) === '[object Map]';
// 判断是不是Set Set是值的集合 类似数组 无重复
const isSet$1 = (val) => toTypeString$1(val) === '[object Set]';
// 判断是不是日期对象
const isDate$1 = (val) => val instanceof Date;

console.log(isDate$1(new Date()), 'isDate') // true
console.log(isDate$1({ __proto__: new Date() }), 'isDate2') // true 其实是对象 不是Date

console.log({ __proto__: [] } instanceof Array, 'array') // true 其实是对象 不是数组

// instanceof 其实是从原型链向上查找 所有instanceof判断类型是不准确的

// 判断是不是函数
const isFunction$1 = (val) => typeof val === 'function';
// 判断是不是字符串
const isString$1 = (val) => typeof val === 'string';
// 判断是不是symbol symbol 是独一无二的值
const isSymbol = (val) => typeof val === 'symbol';
console.log(typeof Symbol(2)) // symbol
// 判断是不是Object
const isObject$1 = (val) => val !== null && typeof val === 'object';

// 判断是不是Promise

const isPromise = val => {
  return isObject$1(val) && isFunction$1(val.then) && isFunction$1(val.catch)
}

const promise1 = new Promise((resolve, reject) => {
  resolve('successful')
})

console.log(isPromise(promise1), 'isPromise')

// 对象转字符串
const toRawType = (value) => {
  // extract "RawType" from strings like "[object RawType]"
  return toTypeString$1(value).slice(8, -1);
};
console.log(toRawType([])) // Array

// 判断是不是纯粹的对象
const isPlainObject$1 = (val) => toTypeString$1(val) === '[object Object]';

console.log(isPlainObject$1([])) // false
console.log(isPlainObject$1({})) // true

const Cons = function () {
  this.name = 'hei'
}

console.log(new Cons())
console.log(isPlainObject$1(new Cons())) // true

// 判断是不是数字型字符串key值
const isIntegerKey = (key) => isString$1(key) &&
  key !== 'NaN' &&
  key[0] !== '-' &&
  '' + parseInt(key, 10) === key;


function makeMap(str, expectsLowerCase) {
  const map = Object.create(null);
  const list = str.split(',');
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val];
}
const isReservedProp = /*#__PURE__*/ makeMap(
  // the leading comma is intentional so empty string "" is also included
  ',key,ref,' +
  'onVnodeBeforeMount,onVnodeMounted,' +
  'onVnodeBeforeUpdate,onVnodeUpdated,' +
  'onVnodeBeforeUnmount,onVnodeUnmounted', true);

console.log(isReservedProp('REF'), 'isRes')

// 缓存函数
const cacheStringFunction$1 = (fn) => {
  const cache = Object.create(null);
  return ((str) => {
      const hit = cache[str];
      return hit || (cache[str] = fn(str));
  });
};

function testFn(str) {
  return str.toUpperCase()
}
console.log(cacheStringFunction$1(testFn)('my love'), 'cache function')
// \w 指 0-9a-zA-Z_ 数字字母下划线
// () 指分组捕获
// 匹配连字符 - 转驼峰
const camelizeRE = /-(\w)/g;

const camelize = cacheStringFunction$1((str) => {
  console.log(str, 'str')
    return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''));
});
console.log(camelize('on-hands')) // onHands

const hyphenateRE$1 = /\B([A-Z])/g;

const hyphenate$1 = cacheStringFunction$1((str) => str.replace(hyphenateRE$1, '-$1').toLowerCase());

console.log(hyphenate$1('onClick')) // on-click

// 首字母转大写
const capitalize = cacheStringFunction$1((str) => str.charAt(0).toUpperCase() + str.slice(1));

console.log(capitalize('onChange')) // OnChange

// compare whether a value has changed, accounting for NaN.
// 判断值是不是已经改变了，考虑NaN
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);

console.log(hasChanged({}, {})) // true

// Object.is 判断两个值是不是相等

console.log(Object.is(+0, -0)) // false
console.log(Object.is(NaN, NaN)) // true
console.log(Object.is(2, 2)) // true
console.log(NaN === NaN) // false

const invokeArrayFns = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
      fns[i](arg);
  }
};

const fnArr = [
  function(val) {
    console.log(val.toUpperCase())
  },
  function(val) {
    console.log(val.toLowerCase())
  },
  function(val) {
    console.log(val)
  },
]

// 转换为数字
const toNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};

const toNumberNew = (val) => {
  const n = parseFloat(val);
  return Number.isNaN(n) ? val : n;
};

console.log(isNaN('a')) // true
console.log(Number.isNaN('a')) // false
invokeArrayFns(fnArr, 'my world')

// 获取全局对象
let _globalThis;
const getGlobalThis = () => {
  return (_globalThis ||
    (_globalThis =
      typeof globalThis !== 'undefined'
        ? globalThis
        : typeof self !== 'undefined'
          ? self
          : typeof window !== 'undefined'
            ? window
            : typeof global !== 'undefined'
              ? global
              : {}));
};
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/globalThis
console.log(getGlobalThis())
