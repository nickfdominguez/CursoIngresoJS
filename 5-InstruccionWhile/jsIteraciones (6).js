function Mostrar()
{
		var contador=0;
		var numero;
		var promedio;
		var acumulador=0;
		var negativo=1
		while(contador<5)
		{
			contador=contador + 1;
			numero= prompt("ingrese numero");
			numero= parseInt(numero);
			while(numero<-10|| numero>10)
			{
				numero= prompt("error reingrese");
				numero= parseInt(numero);
			}
			if(numero<0)
			{
				negativo=negativo* numero;
			}
			else
			{
				acumulador=acumulador+numero;
			}

			acumulador=acumulador+numero;
		}
			document.getElementById('suma').value=acumulador;
			promedio=acumulador/5;
			document.getElementById('promedio').value=promedio;
	

}//FIN DE LA FUNCIÓN