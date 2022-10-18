



alert("Se le solicita al usuario que ingrese los extremos de un rango numérico y un número. Realice un programa para informar si el número está dentro del rango. Si está en rango, informar si el número es par. Si no está dentro del rango, informar si es número es impar.Tenga en cuenta")
alert("Elija el rango numerico")
var limiteInf = Number(prompt("Ingrese unos de los limites del rango inferior"))
var limiteSup = Number(prompt("Ingrese unos de los limites del rango Superior"))

while(limiteSup<limiteInf+5){
     limiteSup = Number(prompt("Ingrese nnuevamente el rango Superior debe tener una diferencia mayor igual a 5")) 
}

alert("el rango elegido es entre " + limiteInf + " y " + limiteSup)

var numElejido = Number(prompt("Ingrese un numero"))

if(numElejido>=limiteInf && numElejido<=limiteSup){

    if(numElejido%2==0){

        alert("El número " + numElejido +" es par")
    }else{
        alert("El número es impar")
    }
}else{

    if(numElejido%2!=0){
        alert("El número" + numElejido + " esta fuera de rango y es impar")
    }else{
        alert("El número esta fuera de rango")
    }
    
}
















