function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);
switch(mesDelAño)
{

			
			case "Enero":
			case "Febrero":
			case "Marzo":
			case "Abril":
			case "Mayo":
			case "Junio":
			case "Julio":
			alert( "Abrigate que hace frio." );
			break;
			
			case "Agosto":
			case "Septiembre":
			case "Octubre":
			alert("Falta para el invierno." );
			
			break;
			case "Noviembre":
			case "Diciembre":
			alert( "Ya pasamos el frio, ahora calor!!!." );
			break;


}



}//FIN DE LA FUNCIÓN