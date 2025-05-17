import { readFileSync } from "fs";

interface Resultado{
    promedio: number,
    estudiantes: string[],
    cantidadEstudiantes: number
}

function promedio(archivo: string) : number {
    const lineas = readFileSync(archivo, 'utf-8')
    const linea = lineas.split('\n')
    const notas: number[] = []
    for (const index of linea){
        const temp = index.split(',')
        notas.push(parseInt(temp[1]))
        //const [, nota] = index.split(',')
       
    }
    let suma: number = 0
    for (const index of notas){
         suma = suma + index
    }
    return suma/notas.length
}

export { promedio}

