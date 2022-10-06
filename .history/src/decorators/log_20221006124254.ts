function Log(
  _: any,
  name: string,
  descriptor: PropertyDescorator
): PropertyDescriptor {
  const newDescriptor = {
    ...descriptor,
    value: function (...args: any[]): any {
      console.log(`Calling ${name} with arguments:`);
      console.dir(args);
      const result = descriptor.value.apply(this, args);
      console.log('Result');
      console.dir(result);
      return result;
    },
  };

  return newDescriptor;
}

class Calculator {
  add(x: number, y: number): number {
    return x + y;
  }
}

const calculator = new Calculator();
calculator.add(1, 2);
