// Esto agrega a la pantalla el valor del botón de la calculadora que toquemos
function agregar (valor){
    document.getElementById('pantalla').value += valor
}
// Esta acción vacía la pantalla
function erese (){
    document.getElementById('pantalla').value = ''
}

// Esta acción toma el valor de la pantalla y ejecuta los cálculos
function calcucalculate(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}