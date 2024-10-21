import { add, subtract, multiply, divide} from "./calculator"

const aDecimal = '10';
const bDecimal = '5';
const aBinary = '1010';
const bBinary = '0101';
const aHex = 'A';
const bHex = '5';

console.log("Decimal Addition: ", add(aDecimal, bDecimal, 'dec'));
console.log("Binary Addition: ", add(aBinary, bBinary, 'bin'));
console.log("Hexadecimal Addition: ", add(aHex, bHex, 'hex'));

console.log("Decimal Subtraction: ", subtract(aDecimal, bDecimal, 'dec'));
console.log("Binary Subtraction: ", subtract(aBinary, bBinary, 'bin'));
console.log("Hexadecimal Subtraction: ", subtract(aHex, bHex, 'hex'));

console.log("Decimal Multiplication: ", multiply(aDecimal, bDecimal, 'dec'));
console.log("Binary Multiplication: ", multiply(aBinary, bBinary, 'bin'));
console.log("Hexadecimal Multiplication: ", multiply(aHex, bHex, 'hex'));

console.log("Decimal Division: ", divide(aDecimal, bDecimal, 'dec'));
console.log("Binary Division: ", divide(aBinary, bBinary, 'bin'));
console.log("Hexadecimal Division: ", divide(aHex, bHex, 'hex'));