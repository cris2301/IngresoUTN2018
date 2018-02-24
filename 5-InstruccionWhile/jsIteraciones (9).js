function Mostrar()
{
	var numero;
	var contador=0;
	var minimo;
	var maximo;
	// declarar variables
	
	var respuesta='si';

	do
	{
		numero = parseInt(prompt(" ingrese un numero"));
		contador ++;
		
		if (contador ==1)

		{
		maximo = numero;
	
		minimo = numero;
		}

		if (numero > maximo)
		{
		maximo = numero;
		}

		if (numero < minimo)
		{
			minimo = numero;
		}




		respuesta =prompt("desea continuar");
	}while(respuesta!='no');






	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;
}//FIN DE LA FUNCIÓN