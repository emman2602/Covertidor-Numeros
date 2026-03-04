import { isDecimal, isBinary, isOctal, isHexadecimal } from "./utils/Validator.js";
import {converter} from "./core/Converter.js"

const form = document.getElementById('formulario');
const inputNumber = document.getElementById('numero');
const selectBase = document.getElementById('tipoNumeracion');
const divError = document.getElementById('mensajeError');

const resDecimal = document.getElementById('resDecimal');
const resBinario = document.getElementById('resBinario')
const resOctal = document.getElementById('resOctal');
const resHexadecimal = document.getElementById('resHexadecimal');

const clearResults = () => {
    resDecimal.value = "";
    resBinario.value = "";
    resOctal.value = "";
    resHexadecimal.value = "";  
}

const showError = (message) => {
    divError.textContent = message;
    divError.classList.add("error");
}

const clearError = () => {
    divError.textContent= "";
    divError.classList.remove("error");
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    clearError();

    let number = inputNumber.value;
    let base = selectBase.value;

    if (number === ""){
        clearResults();
        showError("Porfavor ingresa un número para convertir");
        return;
    }

    let isValidate = false;
    let errorMessage = "Número no válido para el tipo seleccionado";

    switch(base){
        case '10':
            isValidate = isDecimal(number);
            errorMessage = "Número decimal no válido";
            break;
        case '2':
            isValidate = isBinary(number);
            errorMessage = "Número binario no válido";
            break;
        case '8':
            isValidate = isOctal(number);
            errorMessage = "Número octal no válido";
            break;
        case '16':
            isValidate = isHexadecimal(number);
            errorMessage = "Número hexadecimal no válido";
            break;
        
    }

    if(!isValidate) {
        clearResults();
        showError(errorMessage);
        return;
    }

    const result = converter(number, parseInt(base, 10));

    resDecimal.value = result.decimalNumber;
    resBinario.value = result.binaryNumber;
    resOctal.value = result.octalNumber;
    resHexadecimal.value = result.hexaNumber;
    }
);

inputNumber.addEventListener("input", () => {
  if (divError.textContent) clearError();
});¿