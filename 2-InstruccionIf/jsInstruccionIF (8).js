function Mostrar()
{
//tomo la edad  

var edad
var estado
edad = parseInt(document.getElementById("edad").value);
estado = document.getElementById("estadoCivil").value;

if (edad > 17 && estado  == "soltero")

{
alert ("Es soltero y no es menor");
}
}//FIN DE LA FUNCIÓN