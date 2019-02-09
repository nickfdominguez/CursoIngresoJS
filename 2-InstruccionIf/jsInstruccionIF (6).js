function Mostrar()
{
//tomo la edad  

var edad;
edad=document.getElementById("edad").value;
	if(edad>=18)
	{
		alert("mayor de edad");
	}
	else
	{
		if(edad<=17 && edad>=13)
		{
			alert("adolecente");
		}
		if(edad<=12)
		{
			alert("menor de 12 años");
		}
	
	
	}
	

	



}
//FIN DE LA FUNCIÓN