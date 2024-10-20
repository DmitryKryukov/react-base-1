import {
    MathOperation,
    MathExpression,
    NumberMathFunction,
    CalculateFunction
} from './types';
import { convertToDecimal, convertFromDecimal } from './converter';

const operations: Record<MathOperation, NumberMathFunction> = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
        if (b === 0) throw new Error("Division by zero");
        return a / b;
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