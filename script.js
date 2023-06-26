let AUDIO_POKEMON = new Audio('audio/pokemonSound.mp3');


//render Homescreen
async function renderHomescreen() {
    renderFrameworkHomeScreen();

    let pokemonList = document.getElementById('homescreenList');

    //make 15sektions with 10 pokemon and an scrollbutton to scroll to the next side
    for (let p = 1; p < 152; p++) {

        let url = `https://pokeapi.co/api/v2/pokemon/${p}`;
        let response = await fetch(url);
        let responseAsJson = await response.json();

        let pokeName = responseAsJson['name'];
        let pokeID = responseAsJson['id'];

        pokemonList.innerHTML += /*html*/`
        <div id="pokemon${p}"  class="listPokemon" onclick="renderInfoBtn(${p})">
            <div id="homescreenID${p}" class="homescreenID table"><p>#${pokeID}</p></div>
            <div id="homescreenName${p}" class="table"><p>${pokeName}</p></div>
        </div>
        `
        renderLoadingScreen(p);
    }
    document.getElementById('loadingScreen').style = "display:none";
}


function renderLoadingScreen(p){

    let loadingScreen = document.getElementById('loadingScreen');

    let progress = p/151*100;

    loadingScreen.innerHTML = /*html*/`    
            <div id="pokeballImg">
                <img id="pokeball" src="img/pokeball2.png" alt="">
            </div>  
            <h1>Pokedex</h1>
            <div id="loadingBar" aria-valuemax="100">
                <div id="loadingBarProgress" style="width: ${progress}%"></div>
            </div>
            <h3>loading...</h3>
    `   
    }


async function renderInfoBtn(p) {

    let url = `https://pokeapi.co/api/v2/pokemon/${p}`;
    let response = await fetch(url);
    let responseAsJson = await response.json();
    // AUDIO_POKEMON.play();

    document.getElementById('pokePicture').src = responseAsJson['sprites']['versions']['generation-i']['red-blue']['front_default'];
    document.getElementById('homescreenPictureText').innerHTML = /*html*/`
        <div id="infoBtn" class="btn indexBtn" onclick="loadPokedex(${p})">Infos</div>
    `; 
}


async function loadPokedex(pokeID) {

    let url = `https://pokeapi.co/api/v2/pokemon/${pokeID}`;
    let response = await fetch(url);
    let responseAsJson = await response.json();
    
    let newUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokeID}`;
    let newResponse = await fetch(newUrl);
    let newResponseAsJson = await newResponse.json();

    savePokemonJSON(responseAsJson, newResponseAsJson)
    
    console.log(newResponseAsJson);
    renderPageOne(pokeID);
    
}


function renderPageOne(pokeID) {
    let responseAsJson = JSON.parse(loadPokemonJSONOne());
    let newResponseAsJson = JSON.parse(loadPokemonJSONTwo());
    console.log(newResponseAsJson);
    renderFrameworkPageOne();
    renderInfoHeader(responseAsJson);
    renderEntryText(newResponseAsJson);
    renderBottomButtonsPageOne(pokeID);    
}


function renderBottomButtonsPageOne(pokeID){
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
    let pokedexText = i['flavor_text_entries'][2]['flavor_text'].replace('\f', ' ');
    pokedexText = pokedexText.replace('é','e');

    pokedexEntryText.innerHTML = pokedexText;
}


// renderSecondPage
async function renderPageTwo(pokeID) {
    renderFrameworkPageTwo();
    let url = `https://pokeapi.co/api/v2/pokemon/${pokeID}`;
    let response = await fetch(url);
    let responseAsJson = await response.json();
    console.log(responseAsJson);

    renderInfoHeader(responseAsJson);
    renderBottomButtonsPageTwo(pokeID);

    
    //Chart
    let stats = responseAsJson['stats'];
    let statName = [];
    let statValue = [];

    for (let s = 0; s < stats.length; s++) {
        const element = stats[s];

        statValue.push(element['base_stat']);
        statName.push(element['stat']['name']);       
        
        document.getElementById('valueContainerTitle').innerHTML += /*html*/`
            <div id=statName${s}>${element['stat']['name']}</div>
        `;
        document.getElementById('valueContainerValue').innerHTML += /*html*/`
        <div id=statValue${s}>${element['base_stat']}</div>
    `;

    }



    const ctx = document.getElementById('myChart');
    console.log(ctx);

    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: statName,
        datasets: [{          
          data: statValue,
          borderWidth: 1,
          backgroundColor: 'rgba(0,0,0,0.2)',
        }]
      },
      options: {
        scales: {
          r: {
            beginAtZero: true,
            max: 160,
            ticks:{
                display: false
            }
          },
        },
        plugins: {
            legend: {
              display: false
            },
        },
        elements:{
            point:{
                pointStyle: false
            }
          }
      }
    });

}


function renderBottomButtonsPageTwo(pokeID){
    let pokedexBottomButtons = document.getElementById('pokedexBottomButtons');

    pokedexBottomButtons.innerHTML = /*html*/`
        <button id="perviousSide" class="btn" onclick="renderPageOne(${pokeID})">PreviousPage</button>
        `
}



function searchForPokemon(){
    let searchPokemon = document.getElementById('searchPokemon').value; 
    if (searchPokemon < 1 || searchPokemon > 151){
        alert("Die eingegebene ID muss zwischen 1 und 151 sein")
    }else{
        searchPokemonID = "pokemon" + searchPokemon;
        let element = document.getElementById(searchPokemonID);
        console.log(element);
        element.scrollIntoView();
    }
    document.getElementById('searchPokemon').value = "";
}





//** save and load current Pokemon in local Storage to load fast wenn click Previous Button */

function savePokemonJSON(responseAsJson, newResponseAsJson) {
    localStorage.setItem('currentPokemon', JSON.stringify(responseAsJson));
    localStorage.setItem('currentPokemonTwo', JSON.stringify(newResponseAsJson));
}


function loadPokemonJSONOne() {
    let responseAsJson = localStorage.getItem('currentPokemon');
    return responseAsJson;
}

function loadPokemonJSONTwo() {
    let newResponseAsJson = localStorage.getItem('currentPokemonTwo');
    return newResponseAsJson;
}
