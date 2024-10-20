type NumberSystem = 'decimal' | 'binary' | 'hexadecimal';
type MathOperation = 'add' | 'subtract' | 'multiply' | 'divide';
type MathExpression = (a: string, b: string, base: NumberSystem) => string;
type NumberMathFunction = (a: number, b: number) => number;
type CalculateFunction = (a: string, b: string, base: NumberSystem, operation: MathOperation) => string;

export {
    NumberSystem,
    MathOperation,
    MathExpression,
    NumberMathFunction,
    CalculateFunction
};