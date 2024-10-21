type NumberSystem = 'decimal' | 'binary' | 'hexadecimal';

function getSystemFromName(base: NumberSystem): number {
    return base === 'binary' ? 2 : base === 'hexadecimal' ? 16 : 10
}

function convertToDecimal(value: string, base: NumberSystem): number {
    return parseInt(value,getSystemFromName(base))
}

function convertFromDecimal(result: number, base: NumberSystem): string {
    return result.toString(getSystemFromName(base));
}

export { NumberSystem, convertToDecimal, convertFromDecimal };