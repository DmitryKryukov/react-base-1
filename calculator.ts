import { NumberSystem, convertToDecimal, convertFromDecimal } from './converter';

type MathOperation = 'add' | 'subtract' | 'multiply' | 'divide';
type NumberMathFunction = (a: number, b: number) => number;
const operations: Record<MathOperation, NumberMathFunction> = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
        if (b === 0) throw new Error("Division by zero");
        return a / b;
    },
};

type CalculateFunction = (a: string, b: string, base: NumberSystem, operation: MathOperation) => string;
const calculate: CalculateFunction = (a, b, base, operation) => {
    const decimalA = convertToDecimal(a, base);
    const decimalB = convertToDecimal(b, base);
    const result = operations[operation](decimalA, decimalB);
    return convertFromDecimal(result, base);
}

type MathExpression = (a: string, b: string, base: NumberSystem) => string;
const add: MathExpression = (a, b, base) => calculate(a, b, base, 'add');
const subtract: MathExpression = (a, b, base) => calculate(a, b, base, 'subtract');
const multiply: MathExpression = (a, b, base) => calculate(a, b, base, 'multiply');
const divide: MathExpression = (a, b, base) => calculate(a, b, base, 'divide');

export { add, subtract, multiply, divide }