import { sumar } from "./utils";
import { promedio } from "./helpers"
import { readFileSync, writeFileSync, appendFileSync } from "fs";
const readline = require('readline-sync')
//console.log(sumar(5,9))

//const contenido: string = readFileSync('./test.txt', 'utf-8')

//console.log(contenido)

//const mensaje = 'Hola a todos, desde la clase de programacion'
//writeFileSync('./mesaje.txt', mensaje)

//const nombre = readline.question('Ingres tu nombre ')

//const apellido = readline.question('Ingres tu apellido ')

//const linea = `${nombre} ${apellido}\n`
//writeFileSync('./log.txt', linea)
//appendFileSync('./log.txt', linea)


console.log(promedio('./notas.txt'))