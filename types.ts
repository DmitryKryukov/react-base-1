export type NumberSystem = 'decimal' | 'binary' | 'hexadecimal';
export type MathOperation = 'add' | 'subtract' | 'multiply' | 'divide';
export type MathExpression = (a: string, b: string, base: NumberSystem) => string;
export type CalculateFunction = (a: string, b: string, base: NumberSystem, operation: MathOperation) => string;