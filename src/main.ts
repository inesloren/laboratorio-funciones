const numeroTurno = document.querySelector(".numero-turno");

let numeroTurnoDisplay: number = 1; 

// if (numeroTurno) {
//     numeroTurnoDisplay = parseInt(numeroTurno.innerHTML);
// }

function sumarNumero(): void {
    numeroTurnoDisplay += 1; // Suma 1 al número
    if(numeroTurno && numeroTurno instanceof HTMLHeadingElement) {
        numeroTurno.innerHTML = numeroTurnoDisplay.toString().padStart(2, '0');
    }
}

function restarNumero(): void {
    numeroTurnoDisplay -= 1; // Restar 1 al número
    if(numeroTurno && numeroTurno instanceof HTMLHeadingElement) {
        numeroTurno.innerHTML = numeroTurnoDisplay.toString().padStart(2, '0');
    }
}

function resetNumero(): void {
    numeroTurnoDisplay = 0;
    if(numeroTurno && numeroTurno instanceof HTMLHeadingElement) {
        numeroTurno.innerHTML = numeroTurnoDisplay.toString().padStart(2, '0');
    }
}

function cambiarNumero(): void {
    const elementoNumeroParaCambiar = document.getElementById("cambiarnumero");
    if(elementoNumeroParaCambiar && elementoNumeroParaCambiar instanceof HTMLInputElement){
        const valorInput = elementoNumeroParaCambiar.value;
        numeroTurnoDisplay = parseInt(valorInput);
        if(numeroTurno && numeroTurno instanceof HTMLHeadingElement) {
            numeroTurno.innerHTML = numeroTurnoDisplay.toString().padStart(2, '0');
        }
    }
   
}

const botonSiguiente = document.getElementById("siguiente");
if(botonSiguiente && botonSiguiente instanceof HTMLButtonElement) {
    botonSiguiente.addEventListener("click", sumarNumero);
}

const botonAnterior = document.getElementById("anterior");
if(botonAnterior && botonAnterior instanceof HTMLButtonElement) {
    botonAnterior.addEventListener("click", restarNumero);
}

const botonReset = document.getElementById("reset");
if(botonReset && botonReset instanceof HTMLButtonElement) {
    botonReset.addEventListener("click", resetNumero);
}

const botonCambiar = document.getElementById("cambiar");
if(botonCambiar && botonCambiar instanceof HTMLButtonElement){
    botonCambiar.addEventListener("click", cambiarNumero);
}





