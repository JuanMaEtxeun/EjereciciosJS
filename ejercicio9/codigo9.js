



alert("Se le solicita al usuario que ingrese una letra. Realice el algoritmo para informar si el valor ingresado es una vocal")

var letra = prompt("Ingrese una letra")

switch(letra){
    case `a`:
    case `e`:
    case `i`:
    case `o`:
    case `u`:
    case `A`:
    case `E`:
    case `I`:
    case `O`:
    case `U`:
        alert("La letra " + letra + " es una vocal")
        break;
    
    default:
        alert("la letra " + letra + " no es vocal")
        break;
}
















