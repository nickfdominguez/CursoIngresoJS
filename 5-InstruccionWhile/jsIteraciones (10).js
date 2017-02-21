/*function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var numero;
	var respuesta="si";
	var sumanegativos=0;
	var sumapositivos=0;
	var contadorpositivo=0;
	var contadornegativo=0;
	var contadorpar=0;
	var contadorcero=0;
	while(respuesta!="no")
	{
		contador++;
		numero=prompt("ingrese su numero");
		numero=parseInt(numero);
		if(numero<0);
		{
			sumanegativos=sumanegativos+numero;
			contadornegativo++;
		}
		else
		{
			if(numero>0)
			{
				sumapositivos=sumapositivos+numero;
				contadorpositivo++;
			}
		}
		else
		{
			contadorcero++;
		}
		if(numero%2==0)
		{
			contadorpar++;
		}
	}

	var promedionegativo=sumanegativos/contadornegativo;
	var promediopositivo=sumapositivos/sumapositivos;
	var diferencia=sumapositivos-sumanegativos
	document.write("Suma de los negativos"+ sumanegativos);
	document.write("Suma de los positivos"+ sumapositivos);
	document.write("Cantidad de positivos"+ contadorpositivo);
	document.write("Cantidad de negativos"+ contadornegativo);
	document.write("Cantidad de ceros"+ contadorcero);
	document.write("Cantidad de números pares"+ contadorpar);
	document.write("Promedio de positivos"+ promediopositivo);
	document.write("Promedios de negativos"+ promediopositivo);
	document.write("Diferencia entre positivos y negativos, (positvos-negativos)"+ diferencia);

}
*///FIN DE LA FUNCIÓN
//literacion hasta que el usuario quiera//
/*{
alert("funciona");


}/*
*/
var respuesta="si";
var Nota;
var contado;
var sumadorNota;
var promedioNota;
var edad;
var nombre;
var sexo;
var masviejo;
var masviejo;
var cantidad de mujeres aprobadas;
while(respuesta="si")
{
	
	sumadorNota+1;
	Nota=prompt("por favor ingrese su nota");
	Nota=parseInt(Nota);

	while(nota<0||nota>10)
	{
		Nota=prompt("por favor ingrese su nota");
		Nota=parseInt(Nota)
	}
		while(edad=0||edad=90)
		{
			edad=prompt("ingrese su edad");
			edad=parseInt(edad);
		}
		
		nombre=prompt("ingrese su nombre");
		
		while(sexo!="f"&&sexo!="m")
		{
			sexo=prompt("ingrese sexo");
		}
		//aca termino la carga de valididacion//

		sumadorNota=sumadorNota+Nota;
		
		respuesta=prompt("ingrese para continuar");

		if(contador==0)
		{
			masviejo=nombre;
			edadmasviejo=edad;
		}
		else
		{
			if(edad>edadmasviejo)
			{
				masviejo=nombre;
				edadmasviejo=edad;
			}
		if(sexo"f"&& nota>3)
		{
			contadordemujeres++;
		}

		

		}	
		/*1)cantidad de mujeres aprobadas
		2)cantidad de hombres mayores a 25 años aprobados y cantidad de mujeres menores de 20 años aprobados
		3) el nombre de la mujere con mejor notas y el nombre del hombre con mejor nota
		4) promedio de las notas de las mujeres y de los hombres
		5)porcentaje de aprobados vs desaprobados
		6)el sexo y el nombre de la primera persona que se saque 10*/
}

promedioNota=sumadorNota/contador;
promedioNota=parseInt(promedio);
