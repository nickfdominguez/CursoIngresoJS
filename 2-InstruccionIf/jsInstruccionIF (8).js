function mostrar()
{
//tomo la edad  
var estadocivil;
var edad;
edad=document.getElementById("edad").value;
estadocivil=document.getElementById("estadoCivil").value;
if(edad<18 && estadocivil=="soltero")
{
    alert('Es soltero y no es menor.')
}
	


}//FIN DE LA FUNCIÓN