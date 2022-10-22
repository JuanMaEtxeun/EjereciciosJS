



alert("Ingrese su categoria y horas extras")

var categoria = prompt("Ingrese su categoria: 1 - 2 - 3 ");
var horasExtras = Number(prompt("Ingrese la cantidad de horas extras trabajadas"));
var sueldoCobrar = 0;


switch(categoria){

    case `1`:
        if(horasExtras>20){
            sueldoCobrar=(2000 + 500);
            alert("Su sueldo es de U$a: " + sueldoCobrar);
        }else{
            sueldoCobrar = 2000;
            alert("Su sueldo es de U$a: " + sueldoCobrar);
        }
    break;

    case `2`:
       
        sueldoCobrar=(3000);
        alert("Su sueldo es de U$a: " + sueldoCobrar);
        
    break;

    case `3`:
        if(horasExtras>30){
            sueldoCobrar=(4000 + 1000);
                if(sueldoCobrar>4000){
                    alert("Su sueldo supera los U$a 4000, es de: " + sueldoCobrar + " dólares");
                break;    
                }
            
        }else{
            sueldoCobrar = 4000;
            alert("Su sueldo es de U$a: " + sueldoCobrar);
        }
    break;

}



















