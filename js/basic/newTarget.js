class Foo {
  constructor() {
    console.log(new.target.name) // Foo
  }
}

const foo = new Foo()