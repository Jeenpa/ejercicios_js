// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const decimalABinario = (nmr = undefined, base) => {
    if (nmr === undefined) return console.warn("No a ingresado un numero a convertir");

    if (typeof nmr !== "number") return console.warn("El valor ingresado no es un numero");

    if (base !== 2 && base !== 10) return console.warn("Esta es una funcion para convertir base binaria a decimal y viceversa utilize solo alguno de esos valores de base (2: Binario a decimal, 10: Decimal a binario)");
    
    if (base === 2) return console.info(`${nmr} base ${base} = ${parseInt(nmr, base)} base 10`);

    if (base === 10) return console.info(`${nmr} base ${base} = ${nmr.toString(2)} base 2`);
}

decimalABinario(100,2);
decimalABinario("100",2);
decimalABinario(4,10);

// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const descuento = (cantidad = undefined, descuento = 0) => {
    if (cantidad === undefined) return console.warn("No ingreso un monto");

    if (typeof cantidad !== "number") return console.error("El monto ingresado no es un numero");
   
    if (typeof descuento !== "number") return console.error('El valor de descuento ingresado no es un numero');

    if(Math.sign(cantidad) === - 1 || Math.sign(descuento) === - 1) return console.error("Esta operacion no acepta valores negativos");
    
    if (descuento === 0) return console.info(`
    Monto: ${cantidad}
    Descuento: ${descuento}%
    Total a pagar: ${cantidad - (cantidad * (descuento / 100))}
    `);


    return console.info(`
    Monto: ${cantidad}
    Descuento: ${descuento}%
    Total a pagar: ${cantidad - (cantidad * (descuento / 100))}
    `); 
}

descuento(1000,20);
descuento(1000);

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).


const tiempo = (fecha = undefined) => {
    let fechaActual = new Date();
    
    const [monthAntes, dayAntes, yearAntes] = [
        fecha.getMonth(),
        fecha.getDate(),
        fecha.getFullYear(),
    ];

    const [monthDespues, dayDespues, yearDespues] = [
        fechaActual.getMonth(),
        fechaActual.getDate(),
        fechaActual.getFullYear(),
    ];

    if (fecha === undefined) return console.warn("No ha ingresado una fecha");
    if (fecha instanceof Date === false) return console.warn("No ha ingresado una fecha valida");

    console.log(`Desde ${dayAntes}/${monthAntes}/${yearAntes} Hasta ${dayDespues}/${monthDespues}/${yearDespues} Han pasado ${(yearDespues -yearAntes)} años`)
}

tiempo(new Date(2012,9,2));
tiempo("hola");