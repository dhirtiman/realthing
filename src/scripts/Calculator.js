export default class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num) {
    this.result += num;
  }
  subtract(num) {
    this.result -= num;
  }
  multiply(num) {
    this.result *= num;
  }
  divide(num) {
    if (num == 0) {
      throw new Error("Division by zero not allowed");
    } else {
      this.result /= num;

    }

  }
  clear() {
    this.result = 0;
  }
  getResult() {
    return this.result;
  }

  calculate(str) {
    str = str.replace(/[\s]/g, '');
    this.result = eval(str);
    if(this.result == Infinity){
      this.result = 0;
      throw new Error("Division by zero not allowed");
    }
    }
}