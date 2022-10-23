
do{

    var numA = Number(prompt("Ingrese un número"));
    while(isNaN(numA)){
        numA = Number(prompt("Debe ingresar un número obligatoriamente"));
    }

    var numB = Number(prompt("Ingrese otro número"));
    while(isNaN(numB)){
        numB = Number(prompt("Debe ingresar un número obligatoriamente"));
    }

    var operacion = prompt("Elija la operación: suma (+), resta(-), producto(*), división(/)");
    
    while(!(operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/")){
        operacion = prompt("Debe ingresar la operación: suma (+), resta(-), producto(*), división(/) obligatoriamente");
    }

    switch(operacion){
        case `+`:
            var resultado = (numA+numB);
            alert("El resultado de la suma es: " + resultado);
            break;
    
        case `-`:
            var resultado = (numA-numB);
            alert("El resultado de la resta es: " + resultado);
            break;

        case `*`:
            var resultado = (numA*numB);
            alert("El resultado de la multiplicación es: " + resultado);
            break;
    
        case `/`:
            var resultado = (numA/numB);
            alert("El resultado de la división es: " + resultado);
            break;
    
        default:
            
               
}

    var calcular = prompt("Desea continuar con las operaciones: 1-si  2-no");
}while(calcular==1){
    alert("Deja de hacer operaciones");
    
}

