const inputPokemon = document.getElementById('inputPokemon')
const buttonSearch = document.getElementById('buttonSearch')
const imagePokemon = document.getElementById('image-pokemon')
const normalButton = document.getElementById('normal-button')
const shinyButton = document.getElementById('shiny-button')
const backButton = document.getElementById('back-button')
const nextButton = document.getElementById('next-button')

const pressButton = (tag) => {
    tag.addEventListener('mousedown', () => {
        tag.style.transform = 'translate(-4px, 4px)'
    })
    tag.addEventListener('mouseup', () => {
        tag.style.transform = 'translate(0,0)'
    })
}

const getPokemon = async () => {
    const pokemon = inputPokemon.value.trim().toLowerCase()
    if ( !pokemon ) {
        return
    }
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        const data = await response.json()
        console.log(data)
        imagePokemon.src = data.sprites.front_default
        imagePokemon.classList.remove('inactive')
        normalButton.style.backgroundColor = 'papayawhip'
        shinyButton.style.backgroundColor = 'white'
    } catch {
        return
    }
}

const shinyPokemon = async () => {
    const pokemon = inputPokemon.value.trim().toLowerCase()
    if ( !pokemon ) {
        return
    }
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        const data = await response.json()
        imagePokemon.src = data.sprites.front_shiny
        shinyButton.style.backgroundColor = 'papayawhip'
        normalButton.style.backgroundColor = 'white'
    } catch {
        return
    }
}

const normalPokemon = async () => {
    const pokemon = inputPokemon.value.trim().toLowerCase()
    if ( !pokemon ) {
        return
    }
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        const data = await response.json()
        imagePokemon.src = data.sprites.front_default
        normalButton.style.backgroundColor = 'papayawhip'
        shinyButton.style.backgroundColor = 'white'
    } catch {
        return
    }
}

buttonSearch.addEventListener('click', getPokemon)
shinyButton.addEventListener('click', shinyPokemon)
normalButton.addEventListener('click', normalPokemon)

// pressButton(inputPokemon)
pressButton(buttonSearch)
pressButton(normalButton)
pressButton(shinyButton)
pressButton(backButton)
pressButton(nextButton)
