async function loadPokedex(pokeID) {

    let url = `https://pokeapi.co/api/v2/pokemon/${pokeID}`;
    let response = await fetch(url);
    let responseAsJson = await response.json();
    console.log(responseAsJson);


    let newUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokeID}`;
    let newResponse = await fetch(newUrl);
    let newResponseAsJson = await newResponse.json();

    console.log(newResponseAsJson);

    renderPageOne(responseAsJson, newResponseAsJson, pokeID);

}


function renderPageOne(responseAsJson, newResponseAsJson, pokeID) {
    renderFrameworkPageOne();
    renderInfoHeader(responseAsJson);
    renderEntryText(newResponseAsJson);

    //render Button
    let pokedexBottomButtons = document.getElementById('pokedexBottomButtons');

    pokedexBottomButtons.innerHTML = /*html*/`
        <button id="backToMainBtn" class="btn" onclick="renderHomescreen()">Overview</button>
        <button id="nextSideBtn" class="btn" onclick="renderPageTwo(${pokeID})">NextPage</button>
    `
}


function renderInfoHeader(responseAsJson) {
    renderName(responseAsJson);
    renderIndex(responseAsJson);
    renderImg(responseAsJson);
    renderTyp(responseAsJson);
    renderHeight(responseAsJson);
    renderWeight(responseAsJson);
}


function renderName(i) {
    let name = document.getElementById('name');
    name.innerHTML = i['name'];
}


function renderIndex(i) {
    let index = document.getElementById('index');
    if (i['id'] < 10) {
        index.innerHTML = `No. 00${i['id']}`;
    } else if (i['id'] < 100) {
        index.innerHTML = `No. 0${i['id']}`;
    } else {
        index.innerHTML = `No. ${i['id']}`;
    }
}


function renderImg(i) {
    let picture = document.getElementById('picture');
    picture.src = i['sprites']['versions']['generation-i']['red-blue']['front_default'];
}


function renderTyp(i) {
    let typ = document.getElementById('typ');
    typ.innerHTML = i['types'][0]['type']['name'];
}


function renderHeight(i) {
    let height = document.getElementById('height');
    let convertHeight = (i['height'] / 10);
    height.innerHTML = /*html*/`
    <div>Height</div>
    <div>${convertHeight} m</div>
    ` ;
}


function renderWeight(i) {
    let weight = document.getElementById('weight');
    let convertWeight = (i['weight'] / 10);
    weight.innerHTML = /*html*/`
    <div>Weight</div>
    <div>${convertWeight} kg</div>
    ` ;
}


function renderEntryText(i) {
    let pokedexEntryText = document.getElementById('pokedexEntryText');
    // Text Pokedex
    let pokedexText = i['flavor_text_entries'][41]['flavor_text'].replace('\f', ' ');
    // + ' ' +
    // i['flavor_text_entries'][25]['flavor_text'].replace('\f', ' ');

    pokedexEntryText.innerHTML = pokedexText;
}


// renderSecondPage
async function renderPageTwo(pokeID) {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokeID}`;
    let response = await fetch(url);
    let responseAsJson = await response.json();
    console.log(responseAsJson);

    let newUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokeID}`;
    let newResponse = await fetch(newUrl);
    let newResponseAsJson = await newResponse.json();
    console.log(newResponseAsJson)


}




//render Homescreen
async function renderHomescreen() {
    renderFrameworkHomeScreen();

    let pokemonList = document.getElementById('homescreenList');

    //make 15sektions with 10 pokemon and an scrollbutton to scroll to the next side
    for (let p = 1; p < 151; p++) {

        let url = `https://pokeapi.co/api/v2/pokemon/${p}`;
        let response = await fetch(url);
        let responseAsJson = await response.json();

        let pokeName = responseAsJson['name'];
        let pokeID = responseAsJson['id'];

        pokemonList.innerHTML += /*html*/`
        <div id="pokemon${p}"  class="listPokemon" onclick="renderInfoBtn(${p})">
            <div id="homescreenID${p}" class="homescreenID">#${pokeID}</div>
            <div id="homescreenName${p}">${pokeName}</div>
        </div>
        `
    }
}


async function renderInfoBtn(p) {

    let url = `https://pokeapi.co/api/v2/pokemon/${p}`;
    let response = await fetch(url);
    let responseAsJson = await response.json();

    document.getElementById('pokePicture').src = responseAsJson['sprites']['versions']['generation-i']['red-blue']['front_default'];
    document.getElementById('homescreenPictureText').innerHTML = /*html*/`
        <div id="infoBtn" class="btn indexBtn" onclick="loadPokedex(${p})">Infos</div>
    `;
}