



alert("Se le solicita al usuario que ingrese los tres lados de un triángulo. Realice el algoritmo para informar si el triángulo es equilátero, isósceles o escaleno.")
alert("Ingrese los lados del triángulo")

var ladoA = Number(prompt("Ingrese un lado"))
var ladoB = Number(prompt("Ingrese otro lado"))
var ladoC = Number(prompt("Ingrese el lado faltante"))


if(ladoA==ladoB && ladoB==ladoC){
    alert("El tirángulo es equilátero")
}else if(ladoA==ladoB && ladoB!=ladoC){
    alert("El triángulo es isóseles")
}else if(ladoA!==ladoB && ladoB!=ladoC && ladoC!=ladoA){
    alert("El triángulo es escaleno")
}else{
    alert("Puede que falte un lado?")
}


















