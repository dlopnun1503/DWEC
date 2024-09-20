//Ejercicio 6
/*
Hacemos una funcion que pida un número para posteriormente mediante una operación
pasar ese numero a metros por segundo
*/
function tiempo(){
    var pregunta = parseFloat(prompt ("¿Dime un numero?", 0));
    var metrosPorSegundo = pregunta +"Km/h en metros por segundo es igual a " + ((pregunta*1000)/3600);
    alert(metrosPorSegundo);
    }
