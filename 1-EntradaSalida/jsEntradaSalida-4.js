/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
	nombre=document.getElementById("elNombre").value;
	nombre=prompt("ingrese su nombre");
	alert(nombre);
}

