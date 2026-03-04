export const converter = (number, origenBase) => {
    let convertedNumber = parseInt(number,origenBase);

    if(Number.isNaN(convertedNumber)){
        return{
            decimalNumber: "",
            binaryNumber: "",
            octalNumber: "",
            hexaNumber: ""
        };
    }

    let decimalNumber = convertedNumber.toString(10);
    let binaryNumber = convertedNumber.toString(2);
    let octalNumber = convertedNumber.toString(8);
    let hexaNumber = convertedNumber.toString(16).toUpperCase();

    return {
        decimalNumber,
        binaryNumber,
        octalNumber,
        hexaNumber
    };
};