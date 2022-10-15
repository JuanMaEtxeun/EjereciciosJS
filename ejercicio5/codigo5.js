


var valor_hora = Number(prompt("Ingrese el valor de la hora"))
alert("El valor de la hora es: " + valor_hora + " pesos")

var horas_trabajadas = Number(prompt("Ingrese el total de horas trabajadas"))
alert("Cantidad horas trabajadas: " + horas_trabajadas)

var sueldo_base =(valor_hora * horas_trabajadas)
alert("Su sueldo base es de: " + sueldo_base + " pesos")

var antiguedad = parseInt(prompt("Ingrese su antiguedad en años enteros"))
alert("Su antiguedad es de: " + antiguedad + " años")

const BONO = Number(15/100)

var sueldo_cobrar = (sueldo_base + (sueldo_base*antiguedad*BONO))

alert("El sueldo a cobrar con el bono por antiguedad es: " + sueldo_cobrar + " pesos")













