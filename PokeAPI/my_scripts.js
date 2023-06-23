async function getPokemon() {
    // this is where we will call the PokeAPI
    // and handle its response
    let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=3&offset=9')
    let jsonFormat = await response.json()

    // console.log(jsonFormat.results)

    // let firstPokemon = jsonFormat.results[0]

    let htmlResponse = ''
    
    for(let i = 0; i < jsonFormat.results.length; i++) {
        let secondResponse = await fetch(jsonFormat.results[i].url)
        let secondJSONFormat = await secondResponse.json()
        // console.log(`${secondJSONFormat.types[0].type.name}`)
        // generate a row of HTML
        let newRow = `
            <tr>
                <td><img src="${secondJSONFormat.sprites.front_default}" alt="Image of ${secondJSONFormat.name}"></td>
                <td>${secondJSONFormat.name}</td>
                <td>${secondJSONFormat.types[0].type.name}</td>
            </tr>
        `

        // concatenate row with htmlResponse
        htmlResponse += newRow
    }

    document.querySelector('#responseWrapper').innerHTML = htmlResponse
}

getPokemon()

console.log('End of file')