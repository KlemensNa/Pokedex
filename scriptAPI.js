async function loadBulbasaur(){
    let url = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
    let response = await fetch(url);
    let responseAsJson = await response.json();
    console.log(responseAsJson);    
    

    let newUrl = 'https://pokeapi.co/api/v2/pokemon-species/1';
    let newResponse = await fetch(newUrl);
    let newResponseAsJson = await newResponse.json();
    
    console.log(newResponseAsJson);
    renderPokemon(responseAsJson, newResponseAsJson);
    
}


function renderPokemon(responseAsJson, newResponseAsJson){
    let name = document.getElementById('name');
    let index = document.getElementById('index');
    let picture = document.getElementById('picture');
    let typ = document.getElementById('typ');
    let height = document.getElementById('height');
    let weight = document.getElementById('weight');
    let pokedexEntryText = document.getElementById('pokedexEntryText');

    let convertHeight = (responseAsJson['height']/10);
    let convertWeight = (responseAsJson['weight']/10);

    name.innerHTML += responseAsJson['name'];
    index.innerHTML += /*html*/`
       No. 00${responseAsJson['id']}  
    `;    
    picture.src += responseAsJson['sprites']['versions']['generation-i']['red-blue']['front_default'];
    typ.innerHTML += responseAsJson['types'][0]['type']['name'];
    height.innerHTML += /*html*/`
        <div>Height</div>
        <div>${convertHeight} m</div>
    ` ;
    weight.innerHTML += /*html*/`
    <div>Weight</div>
    <div>${convertWeight} kg</div>
` ;

    pokedexEntryText.innerHTML = newResponseAsJson['flavor_text_entries'][1]['flavor_text'] + ' ' +
    newResponseAsJson['flavor_text_entries'][2]['flavor_text'];
}
