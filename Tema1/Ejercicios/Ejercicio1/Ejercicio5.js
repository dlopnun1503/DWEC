// Ejercicio 5
/*
Hacemos una funcion que pregunte dos numero y 
convertimos el valor cadena en numerico para poder sumarlos
*/
function suma(){
    var pregunta = parseInt(prompt ("¿Dime un numero?", 0));
    var pregunta2 = parseInt(prompt ("¿Dime otro numero?", 0));
    var suma = "La suma es igual a " + (pregunta+pregunta2);
    alert(suma);
    }