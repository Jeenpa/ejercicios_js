// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. cuentaCaracter("Hola Mundo") devolverá 10.

function cuentaCaracter(str){
    if(typeof (str) !== 'string'){
        return 'La funcion solo acepta cadenas de texto'
    } else{
        return `El numero de caracteres en la cadena es: ${str.length}`;
    }
}

console.log(cuentaCaracter('Hola mundo'));


// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. cuentaCaracter("Hola Mundo", 4) devolverá "Hola".

function recortaCaracter(str, nmr){
    if(typeof (str) !== 'string'){
        return 'La funcion solo acepta cadenas de texto'
    } else{
        return `el texto recortado es: ${str.substring(0, nmr)}`;
    }
}

console.log(recortaCaracter("Hola Mundo", 4));


// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. cuentaCaracter('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

function textoArray(str, char=undefined){
    if(typeof (str) !== 'string'){
        return 'La funcion solo acepta cadenas de texto'
    } else{
        return `el texto convertido a arreglo es: ${str.split(char)}`;
    }
}

console.log(textoArray('hola que tal', " "));

// 4) Programa una función que repita un texto X veces, pe. cuentaCaracter('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

 function repetir(str, nmr){
    if(typeof (str) !== 'string'){
        return 'La funcion solo acepta cadenas de texto'
    } else{
        let newString = '';
        for (let i = 0; i < nmr; i++) {
            newString += str + ' ';
        }
        return newString;
    }
}

console.log(repetir('Hola Mundo', 3));