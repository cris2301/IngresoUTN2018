function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño)
{
    case"Febrero":   
        alert ("este mes no tine mas de 29 dias");
        break;
    case"Marzo":
    case"Abril":    
    case"Mayo":
    case"Junio":
    case"Julio":
    case"Agosto":
    case"Semptiembre":
    case"Octubre":
    case"Noviembre":
    case"Diciembre":
    case"Enero": 
        alert ("este mes tiene 30 o mas dias");
        break;

}


	
	


}//FIN DE LA FUNCIÓN