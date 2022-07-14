// https://raw.githubusercontent.com/jaylynch/pokemoji/master/img/1.png

const container = document.querySelector('#container')
const baseURL = 'https://raw.githubusercontent.com/jaylynch/pokemoji/master/img/'

for (let i = 1; i < 150; i++) {
    const pokemon = document.createElement('div')
    pokemon.classList.add('pokemon')
    const pokemonNumbers = document.createElement('span')
    pokemonNumbers.innerText = `#${i}`
    const pokemonImages = document.createElement('img')
    pokemonImages.src = `${baseURL}${i}.png`

    pokemon.appendChild(pokemonImages)
    pokemon.appendChild(pokemonNumbers)
    container.appendChild(pokemon)
}

