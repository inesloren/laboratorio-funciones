const numeroTurno = document.querySelector(".numero-turno");

let numeroTurnoDisplay: number = 0; 

if (numeroTurno !== null && numeroTurno !== undefined) {
    numeroTurnoDisplay = parseInt(numeroTurno.innerHTML);
}

function sumarNumero(): void {
    numeroTurnoDisplay += 1; // Suma 1 al número
    if(numeroTurno !== null && numeroTurno !== undefined) {
        numeroTurno.innerHTML = numeroTurnoDisplay.toString().padStart(2, '0');
    }
}

function restarNumero(): void {
    numeroTurnoDisplay -= 1; // Restar 1 al número
    if(numeroTurno !== null && numeroTurno !== undefined) {
        numeroTurno.innerHTML = numeroTurnoDisplay.toString().padStart(2, '0');
    }
}

function resetNumero(): void {
    if(numeroTurno !== null && numeroTurno !== undefined) {
        numeroTurno.innerHTML = '00';
    }
}

function cambiarNumero(): void {
    const numeroParaCambiar = (document.getElementById("cambiarnumero") as HTMLInputElement).value;
    numeroTurnoDisplay = parseInt(numeroParaCambiar);
    if(numeroTurno !== null && numeroTurno !== undefined) {
        numeroTurno.innerHTML = numeroTurnoDisplay.toString().padStart(2, '0');
    }
}

const botonSiguiente = document.getElementById("siguiente") as HTMLButtonElement;
botonSiguiente.addEventListener("click", sumarNumero);

const botonAnterior = document.getElementById("anterior") as HTMLButtonElement;
botonAnterior.addEventListener("click", restarNumero);

const botonReset = document.getElementById("reset") as HTMLButtonElement;
botonReset.addEventListener("click", resetNumero);

const botonCambiar = document.getElementById("cambiar") as HTMLButtonElement;
botonCambiar.addEventListener("click", cambiarNumero);




