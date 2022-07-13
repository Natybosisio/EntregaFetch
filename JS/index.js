const contenidoDOM = document.querySelector("#profes")

const URL = "JS/profesores.json"

document.addEventListener("DOMContentLoaded", ()=> {
    setTimeout(() => {
        debugger
       obtenerContenido(URL)      
    }, 2000);
 })

const retornarContenido = (contenido)=>{
const {profesor, img, descripcion, horario} = contenido
return `
<div>
<h5>"${profesor}"</h5>
<img src="${img}">
<p>${descripcion}</p>
<p>"${horario}"</p>
</div>`

}


const retornoCardError = ()=> {
    return `<div class="center white-text"> 
               
                <h4>El contenido parece no estar disponible. Intente nuevamente en unos minutos.</h4> 
                
            </div>`
 }

const obtenerContenido = (URL)=> {
   let cardsAmostrar 
        fetch(URL)
          .then((response)=> response.json() )
          .then( (data)=> {
                for (contenido of data)
                   cardsAmostrar += retornarContenido(contenido)
                   contenidoDOM.innerHTML = cardsAmostrar
          })
          .catch((error)=> contenidoDOM.innerHTML = retornoCardError() )
          
 }