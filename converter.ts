type MathBase = "bin" | "oct" | "dec" | "hex";

const mathBases: Record<MathBase, number> = {
    bin: 2,
    oct: 8,
    dec: 10,
    hex: 16,
};

function getSystemFromName(base: MathBase): number {
    if (!(base in mathBases)) {
        throw new Error("Invalid base");
    }
    return mathBases[base];
}

function convertToDecimal(value: string, base: MathBase): number {
    return parseInt(value, getSystemFromName(base))
}

function convertFromDecimal(result: number, base: MathBase): string {
    return result.toString(getSystemFromName(base));
}

export { MathBase, convertToDecimal, convertFromDecimal };
