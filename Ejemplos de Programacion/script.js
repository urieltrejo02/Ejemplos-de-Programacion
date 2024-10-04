function generarPatron() {
    let cantidad = Number(document.getElementById('cantidad').value);
    const caracter = 'x';
    let fila = caracter.repeat(cantidad);
    let columna = '';

    for (let indice = 0; indice < cantidad; indice++) {
        columna += caracter + '\n';
    }

    document.getElementById('patronSalida').textContent = fila + '\n' + columna;
    console.log("Patrón generado:");
    console.log(fila);
    console.log(columna);
}

function generarCuadrado() {
    const caracter = 'x';
    let cuadradoPatron = '';

    for (let fila = 0; fila < 4; fila++) {
        cuadradoPatron += caracter.repeat(4) + '\n';
    }

    document.getElementById('cuadradoSalida').textContent = cuadradoPatron;
    console.log("Cuadrado 4x4:");
    console.log(cuadradoPatron);
}

function generarTablas() {
    let resultadoTablas = '';

    for (let num = 1; num <= 10; num++) {
        resultadoTablas += `Tabla del ${num}:\n`;
        for (let multi = 1; multi <= 10; multi++) {
            resultadoTablas += `${num} x ${multi} = ${num * multi}\n`;
        }
        resultadoTablas += '\n';
    }

    document.getElementById('tablasSalida').textContent = resultadoTablas;
    
    console.log("Tablas de multiplicar:");
    console.log(resultadoTablas);
}
