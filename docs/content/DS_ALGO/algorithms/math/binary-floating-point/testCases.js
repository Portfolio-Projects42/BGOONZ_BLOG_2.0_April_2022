/**
 * @typedef {[number, string]} TestCase
 * @property {number} decimal
 * @property {string} binary
 */
/**
 * @type {TestCase[]}
 */
export const testCases16Bits = [
    [-65504, '1111101111111111'],
    [-10344, '1111000100001101'],
    [-27.15625, '1100111011001010'],
    [-1, '1011110000000000'],
    [-0.09997558, '1010111001100110'],
    [0, '0000000000000000'],
    [5.9604644775390625e-8, '0000000000000001'],
    [0.000004529, '0000000001001100'],
    [0.0999755859375, '0010111001100110'],
    [0.199951171875, '0011001001100110'],
    [0.300048828125, '0011010011001101'],
    [1, '0011110000000000'],
    [1.5, '0011111000000000'],
    [1.75, '0011111100000000'],
    [1.875, '0011111110000000'],
    [65504, '0111101111111111']
];
/**
 * @type {TestCase[]}
 */
export const testCases32Bits = [
    [-3.40282346638528859812e38, '11111111011111111111111111111111'],
    [-10345.5595703125, '11000110001000011010011000111101'],
    [-27.15625, '11000001110110010100000000000000'],
    [-1, '10111111100000000000000000000000'],
    [-0.1, '10111101110011001100110011001101'],
    [0, '00000000000000000000000000000000'],
    [1.40129846432481707092e-45, '00000000000000000000000000000001'],
    [0.00000456, '00110110100110010000001000011010'],
    [0.1, '00111101110011001100110011001101'],
    [0.2, '00111110010011001100110011001101'],
    [0.3, '00111110100110011001100110011010'],
    [1, '00111111100000000000000000000000'],
    [1.5, '00111111110000000000000000000000'],
    [1.75, '00111111111000000000000000000000'],
    [1.875, '00111111111100000000000000000000'],
    [3.40282346638528859812e38, '01111111011111111111111111111111']
];
/**
 * @type {TestCase[]}
 */
export const testCases64Bits = [
    [-1.79769313486231570815e308, '1111111111101111111111111111111111111111111111111111111111111111'],
    [-10345.5595703125, '1100000011000100001101001100011110100000000000000000000000000000'],
    [-27.15625, '1100000000111011001010000000000000000000000000000000000000000000'],
    [-1, '1011111111110000000000000000000000000000000000000000000000000000'],
    [-0.1, '1011111110111001100110011001100110011001100110011001100110011010'],
    [0, '0000000000000000000000000000000000000000000000000000000000000000'],
    [4.94065645841246544177e-324, '0000000000000000000000000000000000000000000000000000000000000001'],
    [0.00000456, '0011111011010011001000000100001101000001011100110011110011100100'],
    [0.1, '0011111110111001100110011001100110011001100110011001100110011010'],
    [0.2, '0011111111001001100110011001100110011001100110011001100110011010'],
    [0.3, '0011111111010011001100110011001100110011001100110011001100110011'],
    [1, '0011111111110000000000000000000000000000000000000000000000000000'],
    [1.5, '0011111111111000000000000000000000000000000000000000000000000000'],
    [1.75, '0011111111111100000000000000000000000000000000000000000000000000'],
    [1.875, '0011111111111110000000000000000000000000000000000000000000000000'],
    [1.79769313486231570815e308, '0111111111101111111111111111111111111111111111111111111111111111']
];
