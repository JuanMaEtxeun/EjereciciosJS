



alert("Se le solicita al usuario que ingrese 3 números. Realice un programa para informar si el número es múltiplo de 3, múltiplo 5, múltiplo de ambos o múltiplo de ninguno.")


for( var i=0; i<3; i++){
    var numero=prompt("Ingrese un número entero");
    alert("El número ingresado es: " + numero);

    if(numero%3==0 && numero%5==0){
        alert("El número " + numero + " es multiplo de 3 y de 5");
    }else if(numero%5==0){
        alert("El número " + numero + " es multiplo de 5");
    }else if(numero%3==0){
        alert("El número " + numero + " es multiplo de 3");
    }else{
        alert("El número " + numero + " no es multiplo de 3 ni de 5")
    }
}


























