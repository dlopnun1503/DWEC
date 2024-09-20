// Ejercicio 2
/*
Hemos creado una funcion donde en la variable pregunta le hacemos la pregunta y tras la coma ponemos el valor que vendrá predefinido,
este valor se podrá cambiar, una vez envie la respuesta según cual sea esta, se mostrará una cosa u otra por pantalla.
*/
function pregunta(){
    var mensaje;
    var pregunta = prompt ("¿Cúantos hijos tienes?", "0");
    
    if (pregunta == null || pregunta == "" || pregunta == "0"){
        mensaje = "No tienes hijos";
    }else{
        mensaje = "Tienes " +pregunta+ " hijos";
    }
    alert(mensaje);
    }