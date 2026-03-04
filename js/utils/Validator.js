
export const isDecimal = (number) => {
    const regex = /^[0-9]+$/;
    return regex.test(number);
}
export const isBinary = (number) => {
    const regex = /^[01]+$/;
    return regex.test(number);
}
export const isOctal = (number) => {
    const regex = /^[0-7]+$/;
    return regex.test(number);
}
export const isHexadecimal = (number) => {
    const regex = /^[0-9A-Fa-f]+$/;
    return regex.test(number);
}

