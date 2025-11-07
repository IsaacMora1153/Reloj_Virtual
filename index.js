function ActualizarReloj (){
 const ahora = new Date()

 let hora = ahora.getHours()
 let minutos = ahora.getMinutes()
 let segundos = ahora.getSeconds()

 hora = hora < 10 ? "0"+hora : hora
 minutos = minutos < 10 ? "0"+minutos : minutos
    segundos = segundos < 10 ? "0"+segundos : segundos

    document.getElementById('hora').textContent = hora
    document.getElementById('minutos').textContent = minutos
    document.getElementById('segundos').textContent = segundos

setInterval(ActualizarReloj, 1000)

}
ActualizarReloj()