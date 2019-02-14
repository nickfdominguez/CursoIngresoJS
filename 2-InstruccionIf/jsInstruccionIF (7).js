function mostrar()
{
//tomo la edad  

    var estadocivil;
    var edad;
    estadocivil=document.getElementById("estadoCivil").value;
    edad=document.getElementById("edad").value;
    if(edad<18 && estadocivil!="soltero")
    {
        alert('Es muy pequeño para NO ser soltero.');
    }

}//FIN DE LA FUNCIÓN