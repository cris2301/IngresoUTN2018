function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	var numero
	do
	{
		numero = parseInt(prompt(" ingrese un numero"));
			
		if (numero >=0)	
		{
			positivo = positivo +numero;
		
		
		}	
		else
		{
			negativo = negativo * numero;
			contador++;
		}
		respuesta =prompt("desea continuar");
	}while (respuesta == "si");


document.getElementById('suma').value=positivo;

if(contador == 0)
{
	negativo =0;
}
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN