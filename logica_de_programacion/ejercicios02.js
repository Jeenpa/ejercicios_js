// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const invertir = str => (typeof str !== "string") 
    ? console.log('Debe ingresar una cadena de texto valida')
    : console.log(str.split('').reverse('').join(''))
;

invertir('Hola Mundo');


// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const repite = (str = "", check) => {
    let cadenaArreglo = str.split(' ');
    let count = 0;
    
    if(!str) return console.log('Debe ingresar una cadena de texto valida')
    
    for(let elem of cadenaArreglo){
        if(elem.includes(check)) count++
    }

    return console.log(`La palabra ${check} se repite ${count} veces en el texto`);
} 

repite("hola mundo adios mundo", "mundo");

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const palindromo = (str="") => {
    const revertir = str.toLowerCase().split("").reverse().join("");
    if (!str) return console.log("Debe ingresar una palabra o frase");
    str.toLowerCase() === revertir ? console.log(str + ": Es un palíndromo") : console.log(str + ": No es un palíndromo");
}

palindromo("Salas");


// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const eliminarPatron = (...cadenas) => {
    const regex = /[xyz]/g

    for(const elem of cadenas){
        console.log(elem.replaceAll(regex, ""))
    }

}

eliminarPatron("xyz1", "xyz2", "xyz3");