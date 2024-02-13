// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const esPrimo = nmr => {
    for(let i = 2; i < nmr; i++){
        if(nmr % i === 0) return console.info('false');
    }
    return console.info('true');
}

esPrimo(7);


// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const esPar = (n)=> n % 2 === 0 ? console.info('Par') : console.info('Impar');

esPar(29);

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const conversor = (grados, medida)=> {

    switch(medida){
        case 'C':
            return console.info(`${grados}° Celsius es igual a: ${grados * 9 / 5 + 32}° Fahrenheit`);
        break;
        case 'F':
            return console.info(`${grados}° Fahrenheit es igual a: ${(grados - 32) * 5 / 9}° Celsius`); 
        break;
        default:
    }

}

conversor(0,'C');
conversor(32,'F');