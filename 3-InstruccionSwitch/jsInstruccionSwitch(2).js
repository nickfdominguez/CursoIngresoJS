function Mostrar()
{
//tomo la edad  
var mesDelaño;
mesDelaño=document.getElementById("mes").value;
alert(mesDelaño);
switch(mesDelaño)
{
	case "Enero":
	case "Febrero":
	case  "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":
	case "Julio":
	alert("hace mucho frio");
	break;
	
	case "Agosto":
	case "Septiembre":
	case "Octubre":
	alert("falta para el invierno");
	break;

	case"Noviembre":
	case "Diciembre":
	alert("Ya pasamos el frio, ahora calor!!!.");
	break;
}
			
			
            





}//FIN DE LA FUNCIÓN