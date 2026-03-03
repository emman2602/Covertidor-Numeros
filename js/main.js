import { isDecimal, isBinary } from "./utils/Validator.js";
import {converter} from "./core/Converter.js"

const form = document.getElementById('formulario');
const inputNumber = document.getElementById('numero');
const selectBase = document.getElementById('tipoNumeracion');
const divError = document.getElementById('mensajeError');

const resDecimal = document.getElementById('resDecimal');
const resBinario = document.getElementById('resBinario')


form.addEventListener('submit', (event) => {
    event.preventDefault();

    let number = inputNumber.value;
    let base = selectBase.value;
    let isValidate = false;

    switch(base){
        case '10':
            isValidate = isDecimal(number);
            break;
        case '2':
            isValidate = isBinary(number);
            break;
        
    }

    if(!isValidate) {
        
        return;
    }


    
    
})