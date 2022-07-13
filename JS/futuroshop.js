
const contenidoDOM = document.getElementById("contenido")

const URL ="../JS/baseProductos.json"


document.addEventListener("DOMContentLoaded", ()=> {
    setTimeout(() => {
       obtenerContenido(URL)      
    }, 2000);
 })

const retornoCardContenido = (contenido)=> {
    
    const { img, producto, descripcion, precio} = contenido
    return `<div class="col s12 m6 l3">
                <div class="card z-depth-2">
                    <div class="card-image">
                       <img loading="lazy" src="${img}" title="${producto}">
                    </div>
                    <div class="card-content black">
                       <p class="yellow-text">DESCRIPCION: <span class="white-text">${descripcion}</span></p>
                       <p class="yellow-text">PRECIO: <span class="white-text">${precio}</span></p>
                    </div>
                </div>
            </div>`
 }
 
 const retornoCardError = ()=> {
    return `<div class="center white-text"> 
                <br><br><br><br> 
                <h4>El contenido parece no estar disponible. Intente nuevamente en unos minutos.</h4> 
                <br><br> 
                <i class="large material-icons">sentiment_very_dissatisfied</i> 
                <br><br> 
            </div>`
 }
 
 
 const obtenerContenido = (URL)=> {
   let cardsAmostrar = ""
        fetch(URL)
          .then((response)=> response.json() )
          .then( (data)=> {
                for (contenido of data)
                   cardsAmostrar += retornoCardContenido(contenido)
                   contenidoDOM.innerHTML = cardsAmostrar
          })
          .catch((error)=> contenidoDOM.innerHTML = retornoCardError() )
          
 }
//FETCH CON ASYNC AWAIT - TRY CATCH FINALLY
// const obtenerContenido = async (URL)=> {
//    let cardsAmostrar = ""
//        try {
//          const response = await fetch(URL)
//          const data = await response.json()
//                data.forEach(contenido => {
//                   cardsAmostrar += retornoCardContenido(contenido)
//                })
//                contenidoDOM.innerHTML = cardsAmostrar
//        } catch (error) {
//                contenidoDOM.innerHTML = retornoCardError()
//        } 
//  }

















// let producto = prompt("que producto desea:\n raqueta \n grip")
// let cantidad
// let precio1 = parseInt("200")
// let precio2 = parseInt("10000")
// let descuento = parseInt("10%")
// let bonificadoR = ((precio2 * descuento) / 100)
// let precioDescuentoR = (precio2 - bonificadoR)
// let bonificadoG = ((precio1 * descuento) / 100)
// let precioDescuentoG = (precio1 - bonificadoG)
// let confirma = ""

// //Utilice toLowerCase pero no funciona, queria que si escriben RaQueta o RAQUETA lo detecte como corecto igual
// switch (producto) {

//     case "raqueta":
//         cantidad = parseInt(prompt("cuantas desea comprar"))
//         console.log("Usted va a llevar", cantidad, producto, "el total a pagar es", "$", (precio2 * cantidad))
//         alert("Si abona por tranferencia, tiene un 10% de descuento")
//         confirma = confirm("Desea abonar por tranferencia")

//         if (confirma == true) {
//             console.log("Buena elección su total a pagar es", (cantidad * precioDescuentoR))
//             break;
//         }
//         else (confirma == false)
//         {
//             console.log("Usted va a llevar", cantidad, producto, "por un total de", "$", (precio2 * cantidad))
//         }
//         break;

//     case "grip":
//         cantidad = parseInt(prompt("cuantas desea comprar"))
//         console.log("Usted va a llevar", cantidad, producto, "el total a pagar es", "$", (precio1 * cantidad))
//         console.warn("Si abona por tranferencia, tiene un 10% de descuento")
//         confirma = confirm("Desea abonar por tranferencia")

//         if (confirma == true) {
//             console.log("Buena elección su total a pagar es", (cantidad * precioDescuentoG))
//             break;
//         }
//         else (confirma === false)//me sale este mensaje tambien si es verdadero, y no se porque 
//         {
//             console.log("Usted va a llevar", cantidad, producto, "por un total de", "$", (precio1 * cantidad))
//         }
//         break;

//     default:
//         console.error("no contamos con", " ", producto)
//         break;

// }



