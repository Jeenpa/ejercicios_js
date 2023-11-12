/* 27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

*/


class Pelicula {
  // Metodo constructor de la clase
  constructor({id, titulo, director, estreno, pais, generos, calificacion}){
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    tshis.generos = generos;
    this.calificacion = calificacion;

    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGenero(generos);
    this.validarCalificacion(calificacion);
  }

  static get listaGeneros(){
    return ['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western'];
  }

  static devolverGeneros(){
    return console.info(`Los generos aceptados son: ${Pelicula.listaGeneros.join(", ")}`);
  }

  // Metodos genericos
  validarCadena(propiedad, valor){
    if(!valor) return console.warn(`${propiedad} Esta vacio`);

    if(typeof valor !== 'string') return console.error(`${propiedad} ${valor} No es una cadena`);

    return true;

  }

  validarNumero(propiedad, valor){
    if(!valor) return console.warn(`${propiedad} Esta vacio`);

    if(typeof valor !== 'number') return console.error(`${propiedad} ${valor} No es un numero`);

    return true;

  }

  validarArreglo(propiedad, valor){
     if(!valor) return console.warn(`${propiedad} Esta vacio`);

     if(!(valor instanceof Array)) return console.error(`${propiedad}: ${valor} No es un arreglo`);

     if(valor.length === 0) console.error(`${propiedad} ${valor} El arreglo esta vacio`);

     for (const elem of valor) {
      if(typeof elem !== 'string') return console.error(`El arreglo ${propiedad}, contiene el siguiente elemento invalido: ${elem}`);
     }

     return true;

  }

  

  // Metodos especificos
  validarIMDB(id){
    if(this.validarCadena('Validar IMDB', id)){
      if(!(/^[a-z]{2}[0-9]{7}$/.test(id))) return console.error(`El id ingresado "${id}" no esta en el formato valido IMDB`);
    }
  }

  validarTitulo(titulo){
    if(this.validarCadena('Validar titulo', titulo)){
      if(titulo.length > 100) return console.error("El titulo no puede contener mas de 100 caracteres");
    }
  }

  validarDirector(director){
    if(this.validarCadena('Validar director',director)){
      if(director.length > 50) return console.error("El director no puede contener mas de 50 caracteres");
    }
  }

  validarEstreno(estreno){
    if(this.validarNumero('Validar año de estreno', estreno)){
      if(!(/^[0-9]{4}$/.test(estreno))) return console.error('El año de estreno ingresado no es valido, debe ser un numero entero de 4 digitos');
    }
  }

  validarPais(pais){
    this.validarArreglo('Validar pais', pais);
  }

  validarGenero(generos){
    if(this.validarArreglo('Validar generos', generos)){

      for (const elem of generos) {
        if(!Pelicula.listaGeneros.includes(elem)) return console.error(`El genero ingresado "${elem}" no esta aceptado, favor consultar los generos aceptados`);
      }

    }

  }

  validarCalificacion(calificacion){
    if(this.validarNumero('Validar calificación', calificacion)){
      if(!(calificacion >= 0 && calificacion <= 10)){
        return console.error(`La calificación ${calificacion.toFixed(1)} es invalida, debe ser un numero entre 0 y 10`);
      } else{
        this.calificacion = calificacion.toFixed(1);
      }
    }

  }

  fichaTecnica(){
    console.info(`Ficha tecnica\n\nTitulo: ${this.titulo}\nDirector: ${this.director}\nAño: ${this.estreno}\nPais: ${this.pais.join('-')}\nGeneros: ${this.generos.join(', ')}\nCalificacion: ${this.calificacion}\nIMDB id: ${this.id}`);
  }


}

//Pelicula.devolverGeneros();

const misPelis = [
  {
    id: "tt0758758",
    titulo: "Into the Wild",
    director: "Sean Peen",
    estreno: 2007,
    pais: ["USA"],
    generos: ["Adventure", "Biography", "Drama"],
    calificacion: 8.1
  },
  {
    id: "tt0479143",
    titulo: "Rocky Balboa",
    director: "Sylvester Stallone",
    estreno: 2006,
    pais: ["USA"],
    generos: ["Action", "Drama", "Sport"],
    calificacion: 7.1
  },
  {
    id: "tt0468569",
    titulo: "The Dark Knight",
    director: "Cristopher Nolan",
    estreno: 2008,
    pais: ["USA", "UK"],
    generos: ["Adventure", "Biography", "Drama"],
    calificacion: 8.1
  }
];

misPelis.forEach((el) => new Pelicula(el).fichaTecnica());