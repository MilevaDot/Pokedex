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

const selectPokemon = document.getElementById('selectPokemon')

let index = 0
let listPokemon = []

const selectOptionPokemon = () => {
    inputPokemon.value = selectPokemon.value
    selectPokemon.classList.add('inactive')
}

document.addEventListener('click', function (event)  {
    if ( !inputPokemon.contains( event.target )  && !selectPokemon.contains(event.target) ) {
        selectPokemon.classList.add('inactive')
    }
})

const fillPokemonList = async () => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10000`)
        const data = await response.json()
            listPokemon = data.results.map( pokemon =>
                pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
            )
    } catch ( error ) {
        console.error("Error: ", error)
    }
}



const searchPokemon = () => {
        const input = inputPokemon.value.trim().toLowerCase()
        selectPokemon.innerHTML = ''
        if ( input.length > 0 ) {
            selectPokemon.classList.remove('inactive')
            const pokemonFiltered = listPokemon.filter(name => name.includes(input))
            pokemonFiltered.forEach( name => {
                const optionElement = document.createElement('option')
                optionElement.value = name
                optionElement.textContent = name
                selectPokemon.appendChild(optionElement)
            })
        } else {
            selectPokemon.classList.add('inactive')
        }
}

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

        index = data.id
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

            inputPokemon.value = data.name.charAt(0).toUpperCase() + data.name.slice(1)
        } else {
            index = 0
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

            inputPokemon.value = data.name.charAt(0).toUpperCase() + data.name.slice(1)
        } else {
            index = 0
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
inputPokemon.addEventListener('input', searchPokemon)
selectPokemon.addEventListener('change', selectOptionPokemon)

// pressButton(inputPokemon)
pressButton(buttonSearch)
pressButton(normalButton)
pressButton(shinyButton)
pressButton(backButton)
pressButton(nextButton)
fillPokemonList()
