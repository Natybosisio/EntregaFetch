const DateTime = luxon.DateTime

const dt = DateTime.now()


function mostrarFechaActual() {
    const fecha = document.querySelector("#fecha")
    fecha.innerHTML = dt.toLocaleString(DateTime.DATE_HUGE)

}
mostrarFechaActual()



function mostrarHoraActual(){
    const horario = document.querySelector("#horario")
    horario.innerHTML = dt.toLocaleString(DateTime.TIME_SIMPLE)
  
   
}
mostrarHoraActual()



const openModal = ()=> { dialog.setAttribute("open", true) }




