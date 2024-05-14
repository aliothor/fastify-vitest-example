const log = (fn: Function, context: ClassMethodDecoratorContext) =>
  function () {
    const name = context.name as string
    console.log(`before ${name}`)
    const it = fn.apply(this, arguments)
    console.log(`after ${name}`)
    return it
  }

class Foo {
  @log static foo() {
    console.log('in foo')
  }
}

// Logs "before foo", "in foo", "after foo"
Foo.foo()
