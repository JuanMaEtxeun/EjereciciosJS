


var valor_hora = Number(prompt("Ingrese el valor de la hora"))
alert("El valor de la hora es: " + valor_hora + " pesos")

var horas_trabajadas = Number(prompt("Ingrese el total de horas trabajadas"))
alert("Cantidad horas trabajadas: " + horas_trabajadas)

var antiguedad = parseInt(prompt("Ingrese su antiguedad en años enteros"))
alert("Su antiguedad es de: " + antiguedad + " años")


var seguros_vendidos = Number(prompt("Ingrese la cantidad de seguros vendidos"))
alert("La cantidad de seguros vendidos es de: " + seguros_vendidos)

var seguro_vendido_caro = Number(prompt("Ingrese el seguro vendido más caro."))
alert("El seguro vendido más caro es de: " + seguro_vendido_caro + " pesos")



var sueldo_base =(valor_hora * horas_trabajadas)
alert("Su sueldo base  sin bono es de: " + sueldo_base + " pesos")



const PREMIO_ANTIGUEDAD = Number(15/100)
var bono_antiguedad = (antiguedad* PREMIO_ANTIGUEDAD)
alert("Su bono por antiguedad es de: " + bono_antiguedad + " pesos")

const PREMIO_SEGURO_CARO = Number(50/100)
var bono_seguro_caro = (seguro_vendido_caro*PREMIO_SEGURO_CARO)
alert("Su bono por el seguro vendido más alto es de : " + bono_seguro_caro + " pesos")


const PREMIO_SEGURO_CANTIDAD = Number(25/100)
var bono_seguro_cantidad = (seguros_vendidos*PREMIO_SEGURO_CANTIDAD)
alert("Su bono por cantidad de seguros vendido es de: " + bono_seguro_cantidad + " pesos")


var sueldo_cobrar = (sueldo_base + bono_antiguedad + bono_seguro_cantidad + seguro_vendido_caro)
alert("El sueldo a cobrar con la totalidad de los bonos es: " + sueldo_cobrar + " pesos")













