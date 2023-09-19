
function imprimirImpares() {
    var inicio = parseInt(document.getElementById("inicio").value);
    var fin = parseInt(document.getElementById("fin").value);
    var resultado = '';

    for (var i = inicio; i <= fin; i++) {
        if (i % 2 !== 0) {
            resultado += i + "<br>";
        }
    }

    if (resultado !== '') {
        resultado = resultado.slice(0, -2);
    } else {
        resultado = 'No hay números impares en el rango proporcionado.';
    }


    document.getElementById("resultado").innerHTML = resultado;
}

function limpiarResultado() {
    document.getElementById("resultado").innerHTML = '';
}


function invertirPalabra() {
    // Obtener la palabra ingresada por el usuario
    const inputElement = document.getElementById("palabraInput");
    const resultElement = document.getElementById("resultado");
    const palabra = inputElement.value;
    let pala = document.getElementById('palabraInput').value;
    if (palabra) {
        // Invertir la palabra
        let palabraInvertida = palabra.split('').reverse().join('');

        // Mostrar la palabra invertida
        document.getElementById('resultado').innerText = 'Palabra invertida: ' + palabraInvertida;
    }
    else {
        resultElement.textContent = "Por favor, ingresa una palabra.";
    }
}
function limpiarResultado() {
    document.getElementById("resultado").innerHTML = '';
}

function generarFibonacci() {
    const Length = parseInt(document.getElementById('Length').value);

    let a = 0, b = 1;
    const fibo = [a, b];

    for (let i = 1; i < Length; i++) {
        const c = a + b;
        fibo.push(c);
        a = b;
        b = c;
    }

    document.getElementById('resultado').innerText = 'Secuencia de Fibonacci: ' + fibo.join(', ');
}

function limpiarResultado() {
    document.getElementById("resultado").innerHTML = '';
}

function verificarPalindromo() {
    // Obtener la palabra ingresada por el usuario
    let palabra = document.getElementById('palabraInput').value.toLowerCase();

    // Eliminar los espacios y signos de puntuación de la palabra
    palabra = palabra.replace(/[^\w]/g, '');

    // Invertir la palabra
    let palabraInvertida = palabra.split('').reverse().join('');

    // Verificar si la palabra es un palíndromo
    const esPalindromo = palabra === palabraInvertida;

    // Mostrar el resultado
    const resultado = esPalindromo ? 'Sí, es un palíndromo' : 'No es un palíndromo';
    document.getElementById('resultado').innerText = resultado;

    // Mostrar la palabra invertida en el cuadro
    document.getElementById('cuadro').innerText = 'Palabra invertida: ' + palabraInvertida;
}
function limpiarResultado() {
    document.getElementById("resultado").innerHTML = '';
    document.getElementById("cuadro").innerHTML = '';
}


function obtenerFechas() {
  const mes = parseInt(document.getElementById('mesInput').value);
  const anio = parseInt(document.getElementById('anioInput').value);

  // Verificar si el mes es válido
  if (mes < 1 || mes > 12) {
    document.getElementById('resultado').innerText = 'Mes no válido. Ingrese un número entre 1 y 12.';
    return;
  }

  const primerDia = new Date(anio, mes - 1, 1);
  const ultimoDia = new Date(anio, mes, 0);

  document.getElementById('resultado').innerText = `Primer día del mes: ${primerDia.toDateString()}
Último día del mes: ${ultimoDia.toDateString()}`;
}
{
    function limpiarResultado() {
        document.getElementById("resultado").innerHTML = '';
    }
}


const gallery = document.querySelectorAll(".image");
const visor = document.getElementById("visor");
const imagenVisor = document.getElementById("imagenVisor");

let imagenActual = 0;

function abrirVisor(index) {
    imagenActual = index;
    mostrarImagen();
    visor.style.display = "block";
}

function cerrarVisor() {
    visor.style.display = "none";
}

function mostrarImagen() {
    imagenVisor.src = gallery[imagenActual].querySelector("img").src;
}

function cambiarImagen(direccion) {
    imagenActual += direccion;
    
    if (imagenActual < 0) {
        imagenActual = gallery.length - 1;
    } else if (imagenActual >= gallery.length) {
        imagenActual = 0;
    }
    
    mostrarImagen();
}



visor.addEventListener("click", cerrarVisor);
visor.addEventListener("touchstart", cerrarVisor);
visor.addEventListener("touchmove", cerrarVisor);
visor.addEventListener("touchend", cerrarVisor);

document.addEventListener("keydown", function (e) {
    if (visor.style.display === "block") {
        if (e.key === "ArrowLeft") {
            cambiarImagen(-1);
        } else if (e.key === "ArrowRight") {
            cambiarImagen(1);
        }
    }
});
