function Mostrar()
{

			var contador=0;
			var acumulador=0;
			var respuesta='si';
			while(respuesta=="si")
			{
				numero= prompt("ingrese numero");
				numero= parseInt(numero);
				
				acumulador=acumulador+numero;

				contador++;
				
				respuesta=confirm("desea continuar?");
			}

			document.getElementById('suma').value=acumulador;
			document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN