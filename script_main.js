let currentPage = 1;
const itemsPerPage = 5;

// script_main.js
import animes from './data.js';

// Funciones y lógica principal de recomendar anime
const recomendacionFormButton = document.getElementById('recomendacionFormButton');
const recomendacionFormContainer = document.getElementById('recomendacionFormContainer');
const animeListContainer = document.getElementById('animeList');
const animeListContent = document.getElementById('animeListContent');

// Inicializa el estilo del contenedor del formulario como 'none' para que esté oculto por defecto
recomendacionFormContainer.style.display = 'none';

//Funcionando correctamente la lista de animes no modificar*
function showAnimeList() {
    // Oculta el formulario de recomendación si está visible
    if (recomendacionFormContainer.style.display === 'block') {
        recomendacionFormContainer.style.display = 'none';
    }

    // Muestra la lista de animes si no está visible
    if (animeListContainer.style.display !== 'block') {
        animeListContainer.style.display = 'block';
    }

    // Crear la tabla
    const table = document.createElement("table");
    table.classList.add("anime-table");

    // Crear la cabecera de la tabla
    const headerRow = table.createTHead().insertRow(0);
    headerRow.innerHTML = "<th>Número</th><th>Imagen</th><th>Nombre</th><th>Fecha de Estreno</th>";

    // Agregar los animes a la tabla, considerando la paginación
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, animes.length);

    for (let i = startIndex; i < endIndex; i++) {
        const anime = animes[i];
        const row = table.insertRow(i - startIndex + 1);
        row.innerHTML = `
            <td>${i + 1}</td>
            <td><img src="${anime.image_url}" alt="${anime.title}" class="anime-list-image"></td>
            <td>${anime.title}</td>
            <td>${anime.start_date}</td>`;
    }

    // Limpia el contenido anterior y agrega la tabla al contenedor
    animeListContent.innerHTML = '';
    animeListContent.appendChild(table);

    // Después de crear la tabla, actualiza la información de la página actual
    document.getElementById('paginaActual').textContent = currentPage;

}

//Funcionando lo de animerandom no modificar*
function showRandomAnime() {
    const randomIndex = Math.floor(Math.random() * animes.length);
    const randomAnime = animes[randomIndex];

    // Puedes mostrar la información del anime en el elemento 'animeBox'
    const animeBox = document.getElementById('animeBox');
    animeBox.innerHTML = `
        <h2>${randomAnime.title}</h2>
        <img src="${randomAnime.image_url}" alt="${randomAnime.title}" class="anime-image">
        <div class="cajap">
            
            <p><strong>Género :</strong> ${randomAnime.genres.join(', ')}</p>
            <p><strong>Fecha de Estreno :</strong> ${randomAnime.start_date}</p>
            <p><strong>Episodios :</strong> ${randomAnime.episodes}</p>
            <p><strong>Sinopsis :</strong> ${randomAnime.synopsis}</p>

            ${generateWatchLink("Crunchyroll", randomAnime.watch_links.crunchyroll)}
            ${generateWatchLink("Funimation", randomAnime.watch_links.funimation)}
            ${generateWatchLink("AnimeFLV", randomAnime.watch_links.animeflv)}
            ${generateWatchLink("TioAnime", randomAnime.watch_links.tioanime)}
            ${generateWatchLink("JKAnime", randomAnime.watch_links.jkanime)}
        </div>
    `;
}

function generateWatchLink(service, link) {
    if (link) {
        return `<a href="${link}" class="btn-${service.toLowerCase()}" target="_blank">Ver en ${service}</a>`;
    } else {
        return `<span class="btn-not-available">❌link ${service}</span>`;
    }
}

//Funcionando lo de la lupa no modificar*
function searchAnime() {
    const searchTerm = document.getElementById('searchBox').value.toLowerCase();

    if (searchTerm === "") {
        // Si la caja de búsqueda está vacía, vuelve al estado normal y muestra los botones
        showAnimeList();
        document.getElementById('paginationButtons').style.display = 'block';
    } else {
        // Oculta los botones de paginación al realizar una búsqueda
        document.getElementById('paginationButtons').style.display = 'none';

        const filteredAnimes = animes.filter(anime => anime.title.toLowerCase().includes(searchTerm));

        // Puedes mostrar los resultados en 'animeListContent' de manera similar a showAnimeList()
        const animeListContent = document.getElementById('animeListContent');
        animeListContent.innerHTML = '';

        if (filteredAnimes.length === 0) {
            const noResultsMessage = document.createElement('p');
            noResultsMessage.textContent = 'No se encontraron resultados.';
            animeListContent.appendChild(noResultsMessage);
        } else {
            // Crear la tabla
            const table = document.createElement("table");
            table.classList.add("anime-table");

            // Crear la cabecera de la tabla
            const headerRow = table.createTHead().insertRow(0);
            headerRow.innerHTML = "<th>Número</th><th>Imagen</th><th>Nombre</th><th>Fecha de Estreno</th>";

            // Agregar los animes a la tabla
            for (let i = 0; i < filteredAnimes.length; i++) {
                const anime = filteredAnimes[i];
                const row = table.insertRow(i + 1);
                row.innerHTML = `
                    <td>${i + 1}</td>
                    <td><img src="${anime.image_url}" alt="${anime.title}" class="anime-list-image"></td>
                    <td>${anime.title}</td>
                    <td>${anime.start_date}</td>`;
            }

            // Agrega la tabla al contenedor
            animeListContent.appendChild(table);
        }
    }
}

//Funcionando los filtros de busqueda por la inicial no modificar*
function filterByLetter() {
    const selectedLetter = document.getElementById('filterComboBox').value.toLowerCase();

    if (selectedLetter === "") {
        // Si no hay letra seleccionada, vuelve a mostrar la lista original con paginación
        showAnimeList();
        document.getElementById('paginationButtons').style.display = 'block';
        return;
    }

    const filteredAnimes = animes.filter(anime => anime.title.toLowerCase().startsWith(selectedLetter));

    // Puedes mostrar los resultados en 'animeListContent' de manera similar a showAnimeList()
    const animeListContent = document.getElementById('animeListContent');
    animeListContent.innerHTML = '';

    // Oculta los botones de paginación al realizar un filtro
    document.getElementById('paginationButtons').style.display = 'none';

    if (filteredAnimes.length === 0) {
        const noResultsMessage = document.createElement('p');
        noResultsMessage.textContent = 'No se encontraron resultados.';
        animeListContent.appendChild(noResultsMessage);
    } else {
        // Crear la tabla
        const table = document.createElement("table");
        table.classList.add("anime-table");

        // Crear la cabecera de la tabla
        const headerRow = table.createTHead().insertRow(0);
        headerRow.innerHTML = "<th>Número</th><th>Imagen</th><th>Nombre</th><th>Fecha de Estreno</th>";

        // Agregar los animes a la tabla, sin considerar la paginación
        for (let i = 0; i < filteredAnimes.length; i++) {
            const anime = filteredAnimes[i];
            const row = table.insertRow(i + 1);
            row.innerHTML = `
                <td>${i + 1}</td>
                <td><img src="${anime.image_url}" alt="${anime.title}" class="anime-list-image"></td>
                <td>${anime.title}</td>
                <td>${anime.start_date}</td>`;
        }

        // Agrega la tabla al contenedor
        animeListContent.appendChild(table);
    }
}

function cambiarPagina(offset) {
    currentPage += offset;

    // Asegúrate de que currentPage esté dentro de los límites
    currentPage = Math.max(1, Math.min(currentPage, Math.ceil(animes.length / itemsPerPage)));

    console.log("currentPage:", currentPage);
    console.log("startIndex:", (currentPage - 1) * itemsPerPage);
    console.log("endIndex:", (currentPage - 1) * itemsPerPage + itemsPerPage);

    showAnimeList();
    document.getElementById('paginaActual').textContent = currentPage;
}

document.getElementById('prevPageButton').addEventListener('click', function () {
    cambiarPagina(-1);
});

document.getElementById('nextPageButton').addEventListener('click', function () {
    cambiarPagina(1);
});

// Asigna eventos a los botones
document.getElementById('randomAnimeButton').addEventListener('click', showRandomAnime);
document.getElementById('animeListButton').addEventListener('click', showAnimeList);
document.getElementById('searchBox').addEventListener('input', searchAnime);
document.getElementById('filterComboBox').addEventListener('change', filterByLetter);
recomendacionFormButton.addEventListener('click', function () {
    if (recomendacionFormContainer.style.display === 'none') {
        recomendacionFormContainer.style.display = 'block';
    } else {
        recomendacionFormContainer.style.display = 'none';
    }
});
document.getElementById('reloadPageButton').addEventListener('click', function () {
    location.reload();
});
document.getElementById('reloadPageButton1').addEventListener('click', function () {
    location.reload();
});