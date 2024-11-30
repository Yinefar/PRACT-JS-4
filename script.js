
/*importamos los objetos del modulo ciudades.js para poder utlizarlos en este
modulo
 * 
 */
import { barcelona, roma, paris, londres} from './ciudades.js'

/** declaramos
 variables let  para seleccionar los elementos del DOM que contendrán el título,
 subtitulo y parrafo
 */
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')

/** hacemos
 * un recorrido por los enlaces mediante las funciones
 * de escucha a un clic para activar un li, mientras
 * que desactivamos el otro seleccionado
 */

enlaces.forEach(function(enlace) {
   enlace.addEventListener('click', function () {

        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
     });
    

    this.classList.add('active') 
/**
 * luego declaramos como variable let a contenido donde guardamos
 * lo traido por la funcion obtenerContenido de acuerdo 
 * con la ciudad seleccionada, así que se empieza a actualizar
 * el contenido de la página
 * 
 */

    let contenido = obtenerContenido(this.textContent)

    tituloElemento.innerHTML = contenido.titulo
    subtituloElemento.innerHTML = contenido.subtitulo 
    parrafoElemento.innerHTML = contenido.parrafo  

   });

});


function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona' : barcelona, 
        'Roma' : roma, 
        'París' : paris, 
        'Londres' : londres, 
    };
    return contenido[enlace];
}