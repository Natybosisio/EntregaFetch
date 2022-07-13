function cargarHorario() {
  horasHabilitadas.innerHTML = ""
  for (const hora of horariosDisponibles) {
    const option = document.createElement("option")
    option.innerText = hora
    option.id = hora + "horas"
    horasHabilitadas.append(option)
  }
}
cargarHorario()

//con esta funcion el usuario confirma la reserva y es cargada en mi array de reservas
function mostrarReserva() {

  dia = creado.value;
  hora = horasHabilitadas.value;
  nombre = nombreUsuario.value;
  dni = dniUsuario.value;

  if (nombre !== "" && dni !== "") {
    resultadoUs.innerHTML =
      "<tr>" +
      "<td>" + creado.value + "</td>" +
      "<td>" + horasHabilitadas.value + "hs", "</td>" +
      "</tr>"
    registrarReserva()

  }

  else {
    Swal.fire({
      title: 'Complete todos los campos',
      icon: 'error',
      confirmButtonText: 'error'
    })
  }
}


function registrarReserva() {

  let nuevaReserva = new Reserva(dia, hora, nombre, dni)
  compararReserva()
  reservas.push(nuevaReserva)

}


//con esta funcion informo al usuario si fue reservada previamente
function compararReserva() {

  let existeReserva = buscarCoincidencia(dia, hora)
  if (existeReserva) {
    Swal.fire({
      title: 'Lo siento',
      text: 'ese dia y horario ya fue reservado',
      icon: 'warning',
      confirmButtonText: 'vuelve a intentar'

    })
  }
  else if (existeReserva == false) {
    cajaReservas()
    alertPago()
  }

}

//verificaremos si el dia y la hora ya que sencuentran reservados.
function buscarCoincidencia(dia, hora) {
  let existeCita = false

  for (let citaAux of reservas) {
    citaAux.informacion()
    existeCita = citaAux.verificarExistencia(dia, hora)
    if (existeCita) {
      break
    }
  }
  return existeCita
}


//finalización de compra 
function alertPago() {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

  swalWithBootstrapButtons.fire({
    text: "Esta a punto de abonar",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Continuamos?',
    cancelButtonText: 'No, cancelar!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      debugger
      let cargar = localStorage.setItem("reservas", JSON.stringify(reservas))//NO FUNCIONA
      reservas.push(cargar)
      console.log("Se agregó una reserva nueva.")
      swalWithBootstrapButtons.fire(
        'Listo!',
        'Su reserva quedo registrada.',
        'success'
      )

    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelada',
        'Esperamos verte pronto por aca :)',
        'error'
      )
    }
  })

}
