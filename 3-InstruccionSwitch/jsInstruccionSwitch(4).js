function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
    
    case"Febrero":    
        alert ("tiene 28 dias");
        break;
    case"Abril":    
    case"Mayo":
    case"Junio":
    case"Septiembre":
    case"Noviembre":
        alert ("tiene 30 dias");
        break;
    case"Enero":
    case"Marzo":
    case"Julio":
    case"Agosto":
    case"Octubre":
    case"Diciembre":
        alert ("tiene 31 dias");
        break;

}
//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN