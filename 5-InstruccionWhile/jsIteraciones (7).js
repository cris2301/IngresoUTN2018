function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	var respuesta;
	do
	{
		numero = parseInt(prompt(" ingrese un numero"));
		contador = contador +1;
		acumulador = acumulador + numero;
	
		respuesta = prompt("Desea continuar");

	
	}while (respuesta == "si");

	respuesta = acumulador/contador;



	



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN