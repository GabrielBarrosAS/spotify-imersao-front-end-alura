const searchInput = document.getElementById("search-input");
const resultArtists = document.getElementById("result-artist");

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result, searchTerm));
}

function displayResults(data) {

    cardList.classList.add("hidden");
    addElementsToDiv(data);
    resultArtists.classList.remove("hidden")
}

function addElementsToDiv(elements) {
    const container = document.getElementById("artistsListId");
    container.innerHTML = "";

    container.childNodes
    elements.forEach(({ name, genre, urlImg }) => {
        const artistCard = document.createElement("div");
        artistCard.className = "artist-card";
        
        const cardImg = document.createElement("div");
        cardImg.className = "card-img";
        
        const img = document.createElement("img");
        img.id = "artist-img";
        img.className = "artist-img";
        img.src = urlImg;
        
        const playDiv = document.createElement("div");
        playDiv.className = "play";
        const playIcon = document.createElement("span");
        playIcon.className = "fa fa-solid fa-play";
        playDiv.appendChild(playIcon);
        
        cardImg.appendChild(img);
        cardImg.appendChild(playDiv);
        
        const cardText = document.createElement("div");
        cardText.className = "card-text";
        
        const link = document.createElement("a");
        
        const artistName = document.createElement("span");
        artistName.className = "artist-name";
        artistName.id = "artist-name";
        artistName.textContent = name;
        
        const artistCategorie = document.createElement("span");
        artistCategorie.className = "artist-categorie";
        artistCategorie.textContent = genre;
        
        link.appendChild(artistName);
        link.appendChild(artistCategorie);
        cardText.appendChild(link);
        
        artistCard.appendChild(cardImg);
        artistCard.appendChild(cardText);
        container.appendChild(artistCard);
    });
}

document.addEventListener('input', function() {
    const searchValue = searchInput.value.toLowerCase();

    const cardList = document.getElementById("cardList");

    if (searchValue === '') {
        cardList.classList.remove("hidden")
        resultArtists.classList.add("hidden")
    } else {
        requestApi(searchValue)
    }
});