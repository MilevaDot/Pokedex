const inputPokemon = document.getElementById('inputPokemon')
const buttonSearch = document.getElementById('buttonSearch')
const imagePokemon = document.getElementById('image-pokemon')
const normalButton = document.getElementById('normal-button')
const shinyButton = document.getElementById('shiny-button')
const backButton = document.getElementById('back-button')
const nextButton = document.getElementById('next-button')

const dataName = document.getElementById('data-name')
const dataNumber = document.getElementById('data-number')

const dataId = document.getElementById('data-id')
const dataSpeed = document.getElementById('data-speed')
const dataAttack = document.getElementById('data-attack')
const dataDefense = document.getElementById('data-defense')
const dataHP = document.getElementById('data-hp')
const dataAttackSpecial = document.getElementById('data-attack-special')
const dataDefenseSpecial = document.getElementById('data-defense-special')

let index = 0

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

        dataName.innerHTML = data.name.charAt(0).toUpperCase() + data.name.slice(1)
        dataNumber.innerHTML = data.order
        dataId.innerHTML = data.id

        dataHP.innerHTML = data.stats[0].base_stat
        dataAttack.innerHTML = data.stats[1].base_stat
        dataDefense.innerHTML = data.stats[2].base_stat
        dataAttackSpecial.innerHTML = data.stats[3].base_stat
        dataDefenseSpecial.innerHTML = data.stats[4].base_stat
        dataSpeed.innerHTML = data.stats[5].base_stat

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

const getnextPokemon = async () => {
    try {
        index += 1
        if ( index > 0 ) {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
            const data = await response.json()
            console.log(data)
            imagePokemon.src = data.sprites.front_default
            imagePokemon.classList.remove('inactive')
            console.log(index)
        } else {
            index = 0
            console.log('Oe que')
            return
        }
    } catch {
        return
    }
}

const getBackPokemon = async () => {
    try {
        index -= 1
        if ( index > 0 ) {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
            const data = await response.json()
            console.log(data)
            imagePokemon.src = data.sprites.front_default
            imagePokemon.classList.remove('inactive')
            console.log(index)
        } else {
            index = 0
            console.log('whattt')
            return
        }
    } catch {
        return
    }
}



buttonSearch.addEventListener('click', getPokemon)
shinyButton.addEventListener('click', shinyPokemon)
normalButton.addEventListener('click', normalPokemon)
nextButton.addEventListener('click', getnextPokemon)
backButton.addEventListener('click', getBackPokemon)

// pressButton(inputPokemon)
pressButton(buttonSearch)
pressButton(normalButton)
pressButton(shinyButton)
pressButton(backButton)
pressButton(nextButton)
