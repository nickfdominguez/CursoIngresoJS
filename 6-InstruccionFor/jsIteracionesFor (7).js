function Mostrar()
{
	var numRecorrido;
	var numanterior;
	var acumdivisor;
	var tienedivisor="no";
	var numingresado;
	numingresado=prompt(numingresado);
	numingresado= parseInt(numingresado);
for(numRecorrido=numingresado-1;numRecorrido>2;numRecorrido--)
	{
		acumdivisor=0;
		for(numanterior=2;numanterior<(numRecorrido/2);numanterior++)
		{
				if(numingresado % numanterior==0)
				{
					acumdivisor=acumdivisor + numanterior;
				}
		}

		if(acumdivisor==numRecorrido);
		{
				
				console.log(" es perfecto"+ numanterior);
		}	

	}

}//FIN DE LA FUNCIÓN