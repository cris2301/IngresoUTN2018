function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
var numero;
	
numero = Math.floor(Math.random()*9) + 1

if (numero <= 4)

alert (numero + " Vamos, la proxima se puede");

else if (numero >= 9 && numero <=10) 

{
alert (numero + " EXELENTE");
}
else 
{
alert (numero + " aprobo");
}
}//FIN DE LA FUNCIÓN