function Mostrar()
{

var mesDelaño;
mesDelaño=document.getElementById("mes").value;
alert(mesDelaño);
switch(mesDelaño)
{
	case "Febrero":
	alert(" tiene 28 días");
	break;
	
	case "Enero":
	case "Marzo":
	case "Mayo":
	case "Julio":
	case "Agosto":
	case "Octubre":
	case "Diciembre":
	alert("tiene 31 dias");
	break;
	 
	case "Abril":
	case "Junio":
	case "septiembre":
	case "Noviembre":
	alert("tiene 30 dias");
	break;

}
	



}//FIN DE LA FUNCIÓN