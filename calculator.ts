import { NumberSystem, MathOperation, MathExpression, CalculateFunction } from './types'; 
import { convertToDecimal, convertFromDecimal } from './converter';

const operations: Record<MathOperation, (x: number, y: number) => number> = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => {
        if (y === 0) throw new Error("Division by zero");
        return x / y;
    },
};

const calculate: CalculateFunction = (a, b, base, operation) => {
    const decimalA = convertToDecimal(a, base);
    const decimalB = convertToDecimal(b, base);
    const result = operations[operation](decimalA, decimalB);
    return convertFromDecimal(result, base);
}

const add: MathExpression = (a, b, base) => calculate(a, b, base, 'add');
const subtract: MathExpression = (a, b, base) => calculate(a, b, base, 'subtract');
const multiply: MathExpression = (a, b, base) => calculate(a, b, base, 'multiply');
const divide: MathExpression = (a, b, base) => calculate(a, b, base, 'divide');

export { add, subtract, multiply, divide }