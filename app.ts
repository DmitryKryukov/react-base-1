import { add, subtract, multiply, divide} from "./calculator"

const aDecimal = '10';
const bDecimal = '5';
const aBinary = '1010';
const bBinary = '0101';
const aHex = 'A';
const bHex = '5';

console.log("Decimal Addition: ", add(aDecimal, bDecimal, 'decimal'));
console.log("Binary Addition: ", add(aBinary, bBinary, 'binary'));
console.log("Hexadecimal Addition: ", add(aHex, bHex, 'hexadecimal'));

console.log("Decimal Subtraction: ", subtract(aDecimal, bDecimal, 'decimal'));
console.log("Binary Subtraction: ", subtract(aBinary, bBinary, 'binary'));
console.log("Hexadecimal Subtraction: ", subtract(aHex, bHex, 'hexadecimal'));

console.log("Decimal Multiplication: ", multiply(aDecimal, bDecimal, 'decimal'));
console.log("Binary Multiplication: ", multiply(aBinary, bBinary, 'binary'));
console.log("Hexadecimal Multiplication: ", multiply(aHex, bHex, 'hexadecimal'));

console.log("Decimal Division: ", divide(aDecimal, bDecimal, 'decimal'));
console.log("Binary Division: ", divide(aBinary, bBinary, 'binary'));
console.log("Hexadecimal Division: ", divide(aHex, bHex, 'hexadecimal'));