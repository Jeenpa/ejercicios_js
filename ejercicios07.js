// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const elevarAlCuadrado = (arrNmr = undefined) => {
    if (!arrNmr) return console.warn("El arreglo de numero esta vacio");
    if (!(arrNmr instanceof Array)) return console.error("No ha ingresado un arreglo valido");

    let newArr = [];

    for(let elem of arrNmr){
        newArr.push(Math.pow(elem, 2));
    }

    return console.info(newArr);
}

elevarAlCuadrado();
elevarAlCuadrado(123);
elevarAlCuadrado([1, 4, 5]);



// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const evaluaNumeros = (numbers = undefined) => {
    if (!numbers) return console.warn("El arreglo de numero esta vacio");
    if (!(numbers instanceof Array)) return console.error("No ha ingresado un arreglo valido");

    let numbersArray = numbers.slice();

    numbersArray.sort(function(a,b){
        return a-b
    });

    let uno = numbersArray.shift(); 
    let dos = numbersArray.pop();

    return console.info(`Arreglo original: [${numbers}]
     Numero menor: ${uno} 
     Numero mayor: ${dos}`);
}

evaluaNumeros([1, 4, 5, 99, -60]);

// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const paresEImpares = (numbers = undefined)=>{
    if (!numbers) return console.warn("El arreglo de numero esta vacio");
    if (!(numbers instanceof Array)) return console.error("No ha ingresado un arreglo valido");

    let results = {
        arreglo_original: numbers,
        pares: [],
        impares: []
    }
    

    for (const elem of numbers) {
        elem % 2 === 0 ? results.pares.push(elem) : results.impares.push(elem);
    }

    return console.info(results);
}

paresEImpares([1,2,3,4,5,6,7,8,9,0]);