// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const numeroAleatorio = ()=> console.log(parseInt(Math.random() * (600 - 501) + 501));

numeroAleatorio();


// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const capicua = ( nmr )=>{
    let inverso = parseInt(nmr.toString().split("").reverse().join(""));

    if(nmr === inverso){
        console.log(`El numero ${nmr} si es capicúa`);
    } else{
        console.log(`El numero ${nmr} no es capicúa`);
    }

}

capicua(2002);


// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

function factorial(n){
    if(n < 0) return console.warn('El numero no puede ser negativo'); 
    if (n <= 1) return 1
    return n * factorial(n - 1);
}

console.log(factorial(5));