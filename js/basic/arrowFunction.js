// 箭头函数没有自己的this, arguments, super, new traget, 不能用作构造函数
// 作用: 更简短的函数, 不绑定this
const foo = ['Jau', 'Feb', 'Mar', 'Apr']
const bar = foo.map(({ 'length': value }) => value) // [3, 3, 3, 3]
console.log(bar)

// 从自己作用域链的上一层继承this
class Animal {
  constructor(name) {
    this.callCount = 0
    this.name = name
  }

  callCountFunc() {
    setInterval(() => {
      this.callCount++
      console.log(this.callCount)
    }, 1000)
  }
}

const dog = new Animal('dog')
// dog.callCountFunc()

// 只能传参 call和apply的第一个参数会被忽略
var obj = {
  num: 1,
  add: function (a) {
    var f = v => v + this.num
    return f(a)
  },
  addCall: function (a) {
    var f = v => v + this.num
    var b = {
      num: 2
    }
    return f.call(b, a)
    // return f.apply(b, [a])
  }
}

console.log(obj.add(1)) // 2
console.log(obj.addCall(1)) // 2

// 不绑定Arguments对象
function fee(n) {
  var f = () => arguments[0] + n // arguments[0] 是 n
  return f()
}

var f1 = fee(1, 2, 3, 4)
console.log(f1) // 2

// 作为方法函数
// 箭头函数没有this绑定 所以是this.k是undefined
// 'use strict'
var obj1 = {
  k: 0,
  getK: () => {
    console.log(this.k, this) // undefined Window
  }
}
obj1.getK()

var obj2 = {
  k1000: 1000
}

Object.defineProperty(obj2, 'b', {
  get: () => {
    console.log(this.k1000, this) // undefined Window
    return this.k1000 + 1
  }
})
obj2.b

// 不能new xxx
const Frr = () => { }
// new Frr() // Uncaught TypeError: Frr is not a constructor

// 没有prototype
console.log(Frr.prototype) // undefined

var fss = () => ({ a: 1 })
console.log(fss())

var greeting = (now = new Date()) => 'Good ' + (new Date().getHours() > 18 ? 'evening' : 'day')
console.log(greeting())

// 递归
var dg = x => x === 0 ? 1 : x * dg(x - 1)
console.log(dg(5)) // 120