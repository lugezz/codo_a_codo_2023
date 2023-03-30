let pagina = 1

let btnAnterior = document.querySelector('#btnAnterior')
let btnSiguiente = document.querySelector('#btnSiguiente')
let btnInicio = document.querySelector('#btnInicio')
let btnFin = document.querySelector('#btnFin')

// Función para que cargue la página
window.addEventListener("load", () => {
    cargarPagina(pagina)
})

let cargarPagina = async page => {
    const paginaUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=es-MX&page=${page}`
    try {
        let respuesta = await fetch(paginaUrl)
        if (respuesta.status === 200 ) {
            let datos = await respuesta.json()
            let peliculas = ""

            datos.results.forEach(pelicula => {
                peliculas += `<div class="pelicula">
                <img class="poster" src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" />
                <h3 class="titulo">${pelicula.title}</h3>
                <p class="overview">${pelicula.overview}</p>
                </div>            `
            });
            document.querySelector('.container').innerHTML = peliculas
            document.querySelector('.pagina').innerHTML = `Página N° <b>${page}</b>`

        } else if (respuesta.status === 404 ) {
            // Ideal una redirección a un template de 404
            console.log('La página no existe')
        }

    } catch (error) {
        console.log(error)
    }
}

btnAnterior.addEventListener('click', () => {
    if (pagina > 1) {
        pagina-=1
        cargarPagina(pagina)
    }
})

btnSiguiente.addEventListener("click", () => {
    if (pagina < 500) {
        pagina++
        cargarPagina(pagina)
    }
})

btnInicio.addEventListener("click", () => {
    pagina=1
    cargarPagina(pagina)
})

btnFin.addEventListener("click", () => {
    pagina=500
    cargarPagina(pagina)
})
