let contador = 0;

function incrementarContador(boton) {
    contador++;

    document.getElementById('contador').innerText = contador;

    console.log(`Clic en ${boton}`);
}

function reiniciarContador() {
    contador = 0;

    document.getElementById('contador').innerText = contador;
}