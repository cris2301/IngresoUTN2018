/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioFinal;
    var precio1 = parseInt(document.getElementById("PrecioUno").value);
    var precio2 = parseInt(document.getElementById("PrecioDos").value);
    var precio3 = parseInt(document.getElementById("PrecioTres").value);
    


    precioFinal = precio1 + precio2 + precio3;
    alert ("el resultado es " + precioFinal);
}
function Promedio () 
{
    var precioFinal;
    var precio1 = parseInt(document.getElementById("PrecioUno").value);
    var precio2 = parseInt(document.getElementById("PrecioDos").value);
    var precio3 = parseInt(document.getElementById("PrecioTres").value);
    var promedio
    var IVA

    precioFinal = precio1 + precio2 + precio3;
    IVA = precioFinal * .21;
    promedio = precioFinal + IVA
    alert ("el resultado es " + promedio);



	
}
function PrecioFinal () 
{
	
}