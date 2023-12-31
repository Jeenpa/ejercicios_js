// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const ordenaAscDesc = (arr = undefined) => {
    if (!arr) return console.warn("No ha ingresado un parametro");
    if (arr.length === 0) return console.warn("El arreglo ingresado esta vacio");
    if (!(arr instanceof Array)) console.error("El valor ingresado no es un arreglo");

    for (const elem of arr) {
        if (typeof elem !== "number") return console.error(`${elem} No es un numero`);
    }

    let obj = {
        asc: arr.slice().sort(function(a,b){
            return a-b;
        }),
        desc: arr.slice().sort(function(a,b){
            return b-a;
        })
    } 

    return console.info(obj);

}

ordenaAscDesc([7,5,7,8,6]);


// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const eliminaDuplicado = (arr = undefined)=> {
    if (!arr) return console.warn("No ha ingresado un parametro");
    if (arr.length === 0) return console.warn("El arreglo ingresado esta vacio");
    if (!(arr instanceof Array)) console.error("El valor ingresado no es un arreglo");

    let newArr = [];

    arr.forEach(elem => {
        if (!newArr.includes(elem)) {
            newArr.push(elem);
        }
    });

    console.info(newArr);
}

eliminaDuplicado(["x", 10, "x", 2, "10", 10, true, true]);

// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const promedio = (arr = undefined) => {
    if (!arr) return console.warn("No ha ingresado un parametro");
    if (arr.length === 0) return console.warn("El arreglo ingresado esta vacio");
    if (!(arr instanceof Array)) console.error("El valor ingresado no es un arreglo");

    for (const elem of arr) {
        if (typeof elem !== "number") return console.error(`${elem} No es un numero`);
    }

    let result = arr.reduce((acc,value) => acc + value) / arr.length;

    console.info(result);
}

promedio([9,8,7,6,5,4,3,2,1,0]);