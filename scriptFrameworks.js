function renderFrameworkHomeScreen() {
    let pokedex = document.getElementById('pokedexBlueRed');
    pokedex.innerHTML = /*html*/`
        <div id="homescreen" class="pokemon">
            <div id="loadingScreen"></div>
            <div id="homescreenWelcomeText" onclick="renderHomescreen()">
                <h2>HEY, I AM YA POKEDEX</h2>
            </div>
            <div id="homescreenSearch">
                <input type="number" id="searchPokemon" placeholder="Search Pokemon with ID" min="1" max="150">
                <button class="btn" onclick="searchForPokemon()">Search</button>
            </div>
            <div id="homescreenMain">
                <div id="homescreenList">
                </div>
                <div id="homescreenPicture">
                    <img src="img/trainer.png" id="pokePicture">
                    <div id="homescreenPictureText">
                        <div class="seen"><p>gesehen:</p> <p>150 Pokemon</p></div>
                        <div class="seen"><p>gefangen:</p> <p>150 Pokemon</p></div>
                    </div>
                </div>
            </div>
        </div>
    `
}


function renderFrameworkPageOne() {
    let pokedex = document.getElementById('pokedexBlueRed');
    pokedex.innerHTML = /*html*/`
        <div class="pokemon">
            <div id="pokedexTop">
                <div id="pictureAndId">
                    <div id="pictureContainer"><img id="picture"></div>
                    <div id="index"></div>
                </div>
                <div id="nameAndStats">
                    <div id="name"></div>
                    <div id="typ"></div>
                    <div id="height"></div>
                    <div id="weight"></div>
                </div>
            </div>
            <div id="pokedexText">
                <div id="pokedexEntryText"></div>
            </div>
            <div id="pokedexBottomButtons">
                Hier Button vor und zurück
            </div>
        </div>
    `;
}


function renderFrameworkPageTwo() {
    let pokedex = document.getElementById('pokedexBlueRed');
    pokedex.innerHTML = /*html*/`
        <div class="pokemon">
            <div id="pokedexTop">
                <div id="pictureAndId">
                    <div id="pictureContainer"><img id="picture"></div>
                    <div id="index"></div>
                </div>
                <div id="nameAndStats">
                    <div id="name"></div>
                    <div id="typ"></div>
                    <div id="height"></div>
                    <div id="weight"></div>
                </div>
            </div>
            <div id="pokemonData">
                <div id="pokeDataTitle">Stats</div>
                <div id="pokeDataContent">
                    <div id="chartContainer"><canvas id="myChart"></canvas></div>
                    <div id="valueContainer">
                        <div id="valueContainerTitle"></div>
                        <div id="valueContainerValue"></div>
                </div>
            </div>
                 
            </div>
            <div id="pokedexBottomButtons">
                Hier zurück
            </div>
        </div>
    `;
}


function renderFrameworkPageThree() {
    let pokedex = document.getElementById('pokedexBlueRed');
    pokedex.innerHTML = /*html*/`
        <div class="pokemon">
            <div id="pokedexTop">
                <div id="pictureAndId">
                    <div id="pictureContainer"><img id="picture"></div>
                    <div id="index"></div>
                </div>
                <div id="nameAndStats">
                    <div id="name"></div>
                    <div id="typ"></div>
                    <div id="height"></div>
                    <div id="weight"></div>
                </div>
            </div>
            <div id="pokemonData">
                <div id="pokeDataTitle">Stats</div>
                <div id="pokeDataContent">
                    <div id="chartContainer"><canvas id="myChart"></canvas></div>
                    <div id="valueContainer">
                        <div id="valueContainerTitle"></div>
                        <div id="valueContainerValue"></div>
                </div>
            </div>                 
            </div>
            <div id="pokedexBottomButtons">
                Hier zurück
            </div>
        </div>
    `;
}