let estado = 'apagado';

let sonidoBatman = document.querySelector('#bati_encendido');
let sonidoClick = document.querySelector('#bati_click');

// Divs

let batman = document.querySelector('#batman');
let batiBoton = document.querySelector('#bati_boton');

batiBoton.addEventListener('click', () => controlarBatman())

function controlarBatman () {
    if (estado == 'apagado') {
        estado = 'encendido'
        batman.classList.add("batman_activo")
    } else {
        estado = 'apagado'
        batman.classList.remove("batman_activo")
    }
    sonidoLinterna()
}

function sonidoLinterna () {
    sonidoClick.play()
    if (sonidoBatman.paused) {
        sonidoBatman.play()
    } else {
        sonidoBatman.pause()
    }
}
