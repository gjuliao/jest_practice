class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    static add(num1, num2){
      return num1 + num2;
    }

    static subtract(num1, num2){
        return num1 - num2;
      }
    
    static divide(num1, num2){
        return num1 / num2;
      }
    
    static multiply(num1, num2){
        return num1 * num2;
      }
}

console.log(Calculator.divide(5, 10));

module.exports = Calculator;