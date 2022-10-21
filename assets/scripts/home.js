async function displaySpotify() {
  let album1 = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/39915291");
  let albumObjects = await album1.json();

  let album2 = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/105816292");
  let album2Objects = await album2.json();

  let album3 = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/70957652");
  let album3Objects = await album3.json();

  let album4 = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/13082992");
  let album4Objects = await album4.json();

  document.querySelector(".card-row-album").innerHTML = `<div class="card">
    <div class="card-cover">
        <button class="album-play"><i class="fa-solid fa-play"></i></button>
        <img src="${albumObjects.cover_medium}" alt="${albumObjects.title} ${albumObjects.contributors[0].name} cover">
    </div>
    <div class="card-titles"> 
        <a href="http://localhost:5501/album.html?id=39915291"> <h3>${albumObjects.title}</h3> </a>
        <a href="http://localhost:5501/artist.html?id=4050205"> <p>${albumObjects.contributors[0].name}</p> </a>
    </div>
  </div>
  
  <div class="card">
    <div class="card-cover">
        <button class="album-play"><i class="fa-solid fa-play"></i></button>
        <img src="${album2Objects.cover_medium}" alt="${album2Objects.title} ${album2Objects.contributors[0].name} cover">
    </div>
    <div class="card-titles">
        <a href="http://localhost:5501/album.html?id=105816292"> <h3>${album2Objects.title}</h3> </a>
        <a href="http://localhost:5501/artist.html?id=525046"> <p>${album2Objects.contributors[0].name}</p> </a>
    </div>
  </div>
  
  <div class="card">
    <div class="card-cover">
        <button class="album-play"><i class="fa-solid fa-play"></i></button>
        <img src="${album3Objects.cover_medium}" alt="${album3Objects.title} ${album3Objects.contributors[0].name} cover">
    </div>
    <div class="card-titles">
        <a href="http://localhost:5501/album.html?id=70957652"> <h3>${album3Objects.title}</h3> </a>
        <a href="http://localhost:5501/artist.html?id=7249232"> <p>${album3Objects.contributors[0].name}</p> </a>
    </div>
  </div>
  
  <div class="card">
    <div class="card-cover">
        <button class="album-play"><i class="fa-solid fa-play"></i></button>
        <img src="${album4Objects.cover_medium}" alt="${album4Objects.title} ${album4Objects.contributors[0].name} cover">
    </div>
    <div class="card-titles">
        <a href="http://localhost:5501/album.html?id=13082992"> <h3>${album4Objects.title}</h3> </a>
        <a href="http://localhost:5501/artist.html?id=246791"> <p>${album4Objects.contributors[0].name}</p> </a>
    </div>
  </div>`;

  let artist1 = await fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/4050205");
  let artistObjects = await artist1.json();

  let artist2 = await fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/4105090");
  let artist2Objects = await artist2.json();

  let artist3 = await fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/7249232");
  let artist3Objects = await artist3.json();

  let artist4 = await fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/860");
  let artist4Objects = await artist4.json();

  document.querySelector(".card-row-artist").innerHTML = `<div class="card">
        <div class="artist-cover">
            <img src="${artistObjects.picture_medium}" alt="${artistObjects.name} cover">
        </div>
        <div class="card-titles">
            <a href="http://localhost:5501/artist.html?id=4050205"> <h3>${artistObjects.name}</h3> </a>
            <p>${artistObjects.type}</p>
        </div>
  </div>

  <div class="card">
    <div class="artist-cover">
        <img src="${artist2Objects.picture_medium}" alt="${artist2Objects.title} ${artistObjects.name} cover">
    </div>
    <div class="card-titles">
        <a href="http://localhost:5501/artist.html?id=4105090"> <h3>${artist2Objects.name}</h3> </a>
        <p>${artist2Objects.type}</p>
    </div>
  </div>

  <div class="card">
    <div class="artist-cover">
        <img src="${artist3Objects.picture_medium}" alt="${artist3Objects.title} ${artist3Objects.name} cover">
    </div>
    <div class="card-titles">
        <a href="http://localhost:5501/artist.html?id=7249232"> <h3>${artist3Objects.name}</h3> </a>
        <p>${artist3Objects.type}</p>
    </div>
  </div>

  <div class="card">
    <div class="artist-cover">
        <img src="${artist4Objects.picture_medium}" alt="${artist4Objects.title} ${artist4Objects.name} cover">
    </div>
    <div class="card-titles">
        <a href="http://localhost:5501/artist.html?id=860"> <h3>${artist4Objects.name}</h3> </a>
        <p>${artist4Objects.type}</p>
    </div>
  </div>
  
  `;
}

window.onload = async() => {
    await displaySpotify();
}


