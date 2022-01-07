/**
 * Poniéndolo todo junto
 */

function existePez(listaPeces, pezBuscado) {
    let pezEncontrado = false
    let i = 0
    /* Un error aparece aqui; listapeces no existe como variable
     Existe la variable listaPeces.

     El otro error se encuentra en el bucle while
     si dejas listaPeces.length-1 recorre el array, pero la última posicion la ignora
     sería como si "Estrella no existiese", y al intentar buscar algun pez llamado estrella
     devolverá False.
     */
    while(!pezEncontrado && i<listaPeces.length) {
        pezEncontrado = (listaPeces[i] == pezBuscado) 
        i++      
    }

    return pezEncontrado
}

let muchos_peces = ["Dory", "Nemo", "Shipho", "Estrella"]
let he_encontrado_al_pez = existePez(muchos_peces, "Estrella")

console.log("He encontrado al pez?: " + he_encontrado_al_pez)

/**
 * Ejecuta el código.
 * Esta functión debería devolver "true"; puesto que "Estrella"; efectivamente está en el array.
 * Sin embargo devuelve false. Hay dos errores:
 * 
 * 1. Un error que impide ejecutar el código. Vigila la información que arroja el TERMINAL
 * 2. Un error lógico; que hace que el código no devuelve lo que debería devolver.
 * 
 * Pon "chivatos" en el código para aydarte a averiguar que está sucediendo; o usa el depurador de Visual Studio para ejecutar el código paso a paso
 */