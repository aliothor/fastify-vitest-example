function loggedMethod(originalMethod: Function, context: ClassMethodDecoratorContext) {
  const methodName = String(context.name)

  function replacementMethod(this: any, ...args: any[]) {
    console.log(`LOG: Entering method '${methodName}'.`)
    const result = originalMethod.call(this, ...args)
    console.log(`LOG: Exiting method '${methodName}'.`)
    return result
  }

  return replacementMethod
}

class Person {
  name: string
  constructor(name: string) {
    this.name = name
  }

  @loggedMethod
  greet(age = 18) {
    console.log(`Hello, my name is ${this.name}, age is ${age}`)
  }
}

const p = new Person('foo')
p.greet(22)
