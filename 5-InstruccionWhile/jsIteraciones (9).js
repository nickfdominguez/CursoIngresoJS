function Mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var maximo;
	var minimo;
	var respuesta='si';
	

	while(respuesta!='no')
	{
	
	numero=prompt("ingrese su numero");
	numero=parseInt(numero);
	if(contador==0)
	{
		maximo=numero;
		minimo=numero;
		respuesta=prompt("quiere seguir agregando numero");
	}
	else
	{
		if(numero>maximo)
		{
			maximo=numero;
			respuesta=prompt("quiere seguir agregando numero");
		}
		if(numero<minimo)
		{
			minimo=numero;
			respuesta=prompt("quiere seguir agregando numero");
		}
		
	}

	contador++;
	
	}

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;
	


}//FIN DE LA FUNCIÓN