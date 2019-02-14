function mostrar()
{
//tomo la edad  
    var mesDelaño;
    mesDelaño=document.getElementById("mes").value;
    alert(mesDelaño);
        switch(mesDelaño)
        {
                case "Enero":
                case "Febrero":
                case "Marzo":
                case "Abril":
                case "Mayo":
                case "Junio":
                case "Julio":
                case "Agosto":
                alert("Abrigate que hace frio.");
                break;
                
                case "Septiembre":
                case "Octubre":
                case "Noviembre":
                alert("Falta para el invierno.");
                break;

                case "Diciembre":
                alert("Ya pasamos el frio, ahora calor!!!." );
                break;
        }




}//FIN DE LA FUNCIÓN