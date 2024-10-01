const url = "https://rickandmortyapi.com/api/character";
const tableBody = document.querySelector('#table-body');
const searchInput = document.querySelector('#search');
let characters = [];

// funcion

function displayCharacters(personajesDisplay) {
    tableBody.innerHTML = ''; // limpiar la tabla
    personajesDisplay.forEach(character => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${character.name}</td>
            <td>${character.gender}</td>
            <td>${character.status}</td>`;
        tableBody.appendChild(row);
    })
}

fetch(url)
    .then(response => response.json())
    .then(data => {
        characters = data.results;
        displayCharacters(characters);
    })
    .catch(error => console.error(error));

searchInput.addEventListener('input', (event) => {
    const termino = event.target.value.toLowerCase();
    const personajesFiltrados = characters.filter(personaje => personaje.name.toLowerCase().includes(termino));
    displayCharacters(personajesFiltrados);
});