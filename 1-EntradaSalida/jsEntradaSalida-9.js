/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
var sueldo;
var resultado;
sueldo=document.getElementById("sueldo").value;
sueldo=parseInt(sueldo);
resultado=sueldo*0.10;
document.getElementById("resultado").value=resultado;
}

{
    var sueldo;
    var sueldoConAumento;
    var aumento;
    sueldo=document.getElementById("sueldo").value;
    sueldo=parseFloat(sueldo);
    aumento=sueldo* 0.1;
    sueldoConAumento=aumento + sueldo;
    document.getElementById("resultado").value=resultado;



}