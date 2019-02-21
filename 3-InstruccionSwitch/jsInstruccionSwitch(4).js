function mostrar()
{
//tomo la edad
    var mesDelaño;
    mesDelaño=document.getElementById("mes").value;
    alert(mesDelaño);
    switch(mesDelaño)
    {
        case "Febrero":
        alert("tiene 28 dias");
        break;

        case "Abril":
        case "Junio":
        case  "Septiembre":
        case "Noviembre":
        alert("tiene 30 dias");
        break;

        case "Enero":
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Agosto":
        case "octubre":
        case "Diciembre":
        alert("tiene 31 dias");
        break;
      }


//alert (mesDelAño);





}//FIN DE LA FUNCIÓN
