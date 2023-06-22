function renderFrameworkHomeScreen(){
    let pokedex = document.getElementById('pokedexBlueRed');
    pokedex.innerHTML = /*html*/`
        <div id="homescreen" class="pokemon">
            <div id="homescreenWelcomeText" onclick="renderHomescreen()">
                <h2>HEY, I AM YA POKEDEX</h2>
            </div>
            <div id="homescreenSearch">
                <input type="text" id="searchPokemon" placeholder="Search for ya Pokemon">
                <button class="btn">Search</button>
            </div>
            <div id="homescreenMain">
                <div id="homescreenList">
                </div>
                <div id="homescreenPicture">
                    <img src="./img/trainer.png" id="pokePicture">
                    <div id="homescreenPictureText">
                        <p>gesehen: 150 Pokemon</p>
                        <p>gefangen: 150 Pokemon</p>
                    </div>
                </div>
            </div>
        </div>
    `
}


function renderFrameworkPageOne(){
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


function renderFrameworkPageTwo(){
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
                Hier Daten in Leisten anzeigen
            </div>
            <div id="pokedexBottomButtons">
                Hier zurück
            </div>
        </div>
    `;
}