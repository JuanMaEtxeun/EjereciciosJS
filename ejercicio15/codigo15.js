






alert("Elija el rango numerico");
var Inf = Number(prompt("Ingrese unos de los limites del rango inferior"));
var Sup = Number(prompt("Ingrese unos de los limites del rango Superior"));

while(Sup<Inf+5){
    Sup = Number(prompt("Ingrese nuevamente el rango Superior debe tener una diferencia mayor igual a 5")) 
}

for( var i=0; i<5; i++){
    var numero=Number(prompt("Ingrese un número entero"));
    alert("El número ingresado es: " + numero);

    if(numero>=Inf && numero<=Sup){
        
        if(numero%2==0){
            alert("el número " + numero + " esta dentro del rango y es par");
        }else{
            alert("el número " + numero + " esta dentro del rango");
        }
        
        
    }else{
        if(numero%2!==0){
            alert("El número " + numero + " esta fuera de rango y es impar");
        }else{
            alert("El número esta fuera de rango");
        }
        
    }
}



