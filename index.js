const resultado = document.getElementById('valor-anterior');
const numeroasig = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');
 
const  display = new Display(resultado, numeroasig)
 
botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.id));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});