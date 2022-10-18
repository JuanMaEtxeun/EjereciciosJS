



alert("Se le solicita al usuario que ingrese dos números y un operador (+, -, *, /). Realice un programa para calcular e informar la operación solicitada entre ambos números.")

var numA = Number(prompt("Ingrese un número"))
var numB = Number(prompt("Ingrese otro número"))

var operacion = prompt("Elija la operación: suma (+), resta(-), producto(*), división(/)")

switch(operacion){
    case `+`:
        var resultado = (numA+numB)
        alert("El resultado de la suma es: " + resultado)
        break;
    
    case `-`:
        var resultado = (numA-numB)
        alert("El resultado de la resta es: " + resultado)
        break;

    case `*`:
        var resultado = (numA*numB)
        alert("El resultado de la multiplicación es: " + resultado)
        break;
    
    case `/`:
        var resultado = (numA/numB)
        alert("El resultado de la división es: " + resultado)
        break;
    
    default:
        alert("No ha elegido ninguna operación")    
}

















