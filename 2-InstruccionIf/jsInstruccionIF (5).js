function Mostrar()
{
//tomo la edad  

var edad;
edad=document.getElementById('edad').value;
if(edad>18)
	{
		alert("no es adolecente");
	}
	if(edad<18)
	{
		alert("es adolecente");
	}

}//FIN DE LA FUNCIÓN