function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var random;
	random=Math.floor(Math.random()*10)+1;
	if(random>8)
	{
		alert("ecelente");
	}
	else
	{
		if(random>4)
		{
			alert("aprobo");
		}
	if(random<4)
	{
		alert("Vamos, la proxima se puede");
	}
	
	}

	
}//FIN DE LA FUNCIÓN