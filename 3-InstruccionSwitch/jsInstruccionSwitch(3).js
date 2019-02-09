function Mostrar()
{
//tomo la edad  

//alert (mesDelAño);
var mesDelaño;
mesDelaño=document.getElementById("mes").value;
alert(mesDelaño);
switch(mesDelaño)
	{
		case "Febrero":
		alert(" Este mes no tiene más de 29 días." );
		break;
        
        case "Enero":
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Agosto":
        case "Octubre":
        case "Diciembre":
        case "Abril":
        case "Junio":
        case "septiembre":
        case "Noviembre":
        alert( "Este mes tiene 30 o más días");
        break;
        
    
    
    
    }


	


}//FIN DE LA FUNCIÓN