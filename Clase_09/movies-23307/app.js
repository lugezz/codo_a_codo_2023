
let pagina = 1  // Variable que lleva el número de página

let btnAnterior = document.querySelector('.btnAnterior')
let btnSiguiente = document.querySelector('.btnSiguiente')
let btnInicio = document.querySelector('.btnInicio')
let btnFin = document.querySelector('.btnFin')

btnAnterior.addEventListener("click", () => {
    if (pagina > 1) {
        pagina-=1
    }
})

btnSiguiente.addEventListener("click", () => {
    if (pagina < 500) {
        pagina++
    }
})

btnInicio.addEventListener("click", () => {
    pagina=1
})

btnFin.addEventListener("click", () => {
    pagina=500
})