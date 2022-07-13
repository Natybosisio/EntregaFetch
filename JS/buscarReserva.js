
function verificarReservasUsuario() {

   let inputDni = document.getElementById("inputDni").value;
   let dniUsuario = inputDni
   let validado = validadDni(dniUsuario)
   if (validado == false) {
      return
   }
   //ACA QUIERO que si apreta mas de una vez en consultar no vuelva a ponerlo 
   let p = new Promise((resolve, reject)=>{
   for (let dniR of reservas) {
    
         
      if (dniR.reservaDni() == dniUsuario) {
         
         resolve()
         let resultadosPorId = document.getElementById("resultadosPorId");

         resultadosPorId.innerHTML +=
            "<tr>" +
            "<th scope=\"row\">" + dniR.reservaDni() + "</th>" +
            "<td>" + dniR.dia + "</td>" +
            "<td>" + dniR.hora + "</td>" +
            "<td>" + dniR.nombre + "</td>" +
            "</tr>" 
         
         ;}
      else{
      reject("DNI no encontrado");
      }}})
   
//ACA QUISIERA PONER UN RESET PARA QUE VACIE EL INPUT
//EL THEN NO FUNCIONA, IGUAL NO LO NECESITO 
   // p.then(res=>{
   //    console.log(res)
   // })
   p.catch(error=>{
      Swal.fire({
         title: "No hay reservas guardadas",
      })
   })
   
}



function validadDni(dni) {
   let esDniValido = true
   if (dni.length < 7 || dni.length > 12) {
      Swal.fire({
         title: 'Ingrese un DNI valido',
         showClass: {
            popup: 'animate__animated animate__fadeInDown'
         },
         hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
         }
      })
      esDniValido = false
   }
   return esDniValido
}
