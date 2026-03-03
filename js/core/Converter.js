export const converter = (number, origenBase) => {
    let convertedNumber = parseInt(number,origenBase);
    let decimalNumber = convertedNumber.toString(10);
    let binaryNumber = convertedNumber.toString(2);

    return {
        decimalNumber,
        binaryNumber
    }
}