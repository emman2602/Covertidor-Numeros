
export const isDecimal = (number) => {
    let regex = /^[0-9]+$/;
    return regex.test(number);
}
export const isBinary = (number) => {
    let regex = /^[01]+$/;
    return regex.test(number);
}

