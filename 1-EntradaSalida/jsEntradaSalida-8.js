*LGFQ/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var a;
    var b;
    var resultado;
}

a = parseInt(document.getElementById("numeroDividendo").value);

b = parseInt(document.getElementById("numeroDivisor").value);

resultado = a % b;

alert("el resultado " + resultado);

