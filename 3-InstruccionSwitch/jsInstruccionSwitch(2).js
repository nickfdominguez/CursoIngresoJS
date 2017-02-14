function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);
switch(mesDelAño)
{

			case "Enero":
			case "Febero":
			case "Marzo":
			case "Abril":
			case "Mayo":
			case "Junio":
			case "Julio":

			alert( "Abrigate que hace frio." );

			case "Agosto":
			case "Septiembre":
			case "Octubre":
			
			alert("Falta para el invierno." );

			case "Noviembre":
			case "diciembre":

			alert( "Ya pasamos el frio, ahora calor!!!." );

}



}//FIN DE LA FUNCIÓN