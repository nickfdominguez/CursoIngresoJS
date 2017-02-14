function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var random;
	random=Math.floor(Math.random() * 10) + 1;
	if(random>8)
	{
		alert("excelente");
	}
	else
	{
		if(random>4)
		{
			alert("aprobo");
		}
		else
		{
			alert("Vamos, la proxima se puede");
		}
	}

}//FIN DE LA FUNCIÓN