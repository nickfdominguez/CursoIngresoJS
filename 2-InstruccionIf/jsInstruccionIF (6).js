function mostrar()
{
//tomo la edad  
        var edad;
        edad=document.getElementById("edad").value;
            if(edad>=18)
            {
                alert("mayor de edad");
            }
            else
            {
                if(edad>=13 && edad <=17)
                {
                    alert(" es adolecente");

                }
                else
                {
                        if(edad<=12)

                    {
                        alert("menor a 13");
                    }
                }
               
            }

}//FIN DE LA FUNCIÓN