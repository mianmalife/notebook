// var a = 100
// var obj = {
//   a: 10
// }
// function fn() {
//   // this = obj -> error
//   console.log(this.a)
// }
// fn() // 100
// fn.call(obj) // 10

// var b = 200
// function fn1() {
//   function fn2() {
//     console.log(this.b)
//   }
//   fn2()
// }
// fn1() // 200

// var c = 300
// var obj2 = {
//   c: 30,
//   fb: this.c + 20,
//   fc: function() {
//     return this.c
//   }
// }
// console.log(obj2.fb) // 320 {} 不能形成作用域 所以 非严格模式下 this.c this指向window
// console.log(obj2.fc()) // 30

// function fn3() {
//   'use strict'
//   console.log(this)
// }
// fn3()
// window.fn3()

// function foo() {
//   console.log(this) // window
//   console.log(this.a) // 20
// }

// function active(fn) {
//   fn(); // 真实调用者，为独立调用
// }

// var a = 20;
// var obj = {
//   a: 10,
//   getA: foo
// }

// active(obj.getA);

// var a = 100
// var obj4 = {
//   a: 1,
//   fn: function() {
//     return this.a
//   }
// }

// var test = obj4.fn
// console.log(test()) // 100

// call apply

function foo3() {
  return this.a
}
var a = 1000
var obj5 = {
  a: 90
}

var result = foo3.call(obj5)
console.log(result) // 90

function foo4(num1, num2) {
  return this.a + num1 + num2
}

var obj6 = {
  a: 20
}

var res1 = foo4.apply(obj6, [20, 20])
var res2 = foo4.call(obj6, 20, 20)
console.log(res1, res2) // 60 60

// 类数组转数组
function sum(a, b, c, d) {
  console.log(arguments)
  console.log([].reverse.call(arguments)) // [1,2,3,4]
}
sum(1,2,3,4)

// 继承
function Person(name, age) {
  this.name = name
  this.age = age
}

function Student(name, age, high) {
  Person.call(this, name, age) // this new出的实例  这句相当于在这里执行了 this.name = name, this.age = age
  this.high = high
}

Student.prototype.message = function() {
  console.log(this.name + ' ' + this.age + ' ' + this.high) // xiaoming 18 180
}

var mess = new Student('xiaoming', 18, 180).message()
console.log(mess)

// 在执行上下文中保证this指向不变

var obj7 = {
  fa: 29,
  fn: function() {
    setTimeout(function() {
      console.log(this.fa)  // 29
    }.bind(this), 1000)
  }
}

console.log(obj7.fn())

let lrc = 'hello let'

let obj8  = {
  lrc: 'hello obj8 lrc',
  k: () => this.lrc,
  getLrc: function() {
    console.log(this.lrc, this)
  }
}
obj8.getLrc() // hello obj8 lrc
console.log(obj8.k()) // undefind