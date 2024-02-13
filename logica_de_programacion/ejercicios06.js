// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const vocalesYConsonantes = (str = undefined) => {
    if(!str) return console.warn("No se ha ingresado un texto");
    if(typeof str !== 'string') return console.error("Se ingreso un valor invalido solo se acepta cadenas de texto");

    const vocales = ["a","e","i","o","u"];
    const consonantes = ["q","w","r","t","y","p","s","d","f","g","h","j","k","l","ñ","z","x","c","v","b","n","m"];
    str = str.toLowerCase();
    let sumav = 0;
    let sumac = 0;

    for(let i = 0; i <= str.length; i++){
        if(vocales.includes(str[i])){
            sumav++;
        } else if(consonantes.includes(str[i])){
            sumac++;
        }
    }

    return console.info(`${str} = Vocales: ${sumav}, Consonantes: ${sumac}`);
}

vocalesYConsonantes(); 
vocalesYConsonantes(123);
vocalesYConsonantes("Hola Mundo");


// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

const validarNombre = (name) => {
    if(!name) return console.warn("No ingresaste un nombre");
    if(typeof name !== 'string') return console.error(`El valor ${name} ingresado. No es una cadena de texto`);

    let nameRegex = /^(?=.{3,20}$)[A-ZÁÉÍÓÚ][a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóú]+)?$/i
    return nameRegex.test(name) ? 
    console.info(`El nombre ${name} es correcto`) :
    console.error(`${name} No es un nombre valido`);
}

validarNombre();
validarNombre("Jesús Parra");
validarNombre("parra,");

// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const validadEmail = (email = undefined) =>{
    if(!email) return console.warn("No se ha ingresado un correo");
    if(typeof email !== 'string') return console.error(`El valor ${email} ingresado. No es una cadena de texto`);


    let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    return emailRegex.test(email) ? console.info("Verdadero") : console.info("Falso");
}

validadEmail();
validadEmail("Jesus Parra");
validadEmail("parra2089@gmail.com");