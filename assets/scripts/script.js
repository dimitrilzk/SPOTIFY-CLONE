let ciao = "Saluto"
console.log(ciao);



async function displaySpotify(){
    let album1 = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/39915291")
    let albumObjects = await album1.json();

    let album2 = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/39949511")
    let album2Objects = await album2.json();

    let album3 = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/119606")
    let album3Objects = await album3.json();

    let album4 = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/125500082")
    let album4Objects = await album4.json();
    
    document.querySelector(".card-row-album").innerHTML = 
    `<div class="card">
    <div class="card-cover">
        <img src="${albumObjects.cover_medium}" alt="${albumObjects.title} ${albumObjects.contributors[0].name} cover">
    </div>
    <div class="card-titles">
        <h3>${albumObjects.title}</h3>
        <p>${albumObjects.contributors[0].name}</p>
    </div>
  </div>
  
  <div class="card">
    <div class="card-cover">
        <img src="${album2Objects.cover_medium}" alt="${album2Objects.title} ${album2Objects.contributors[0].name} cover">
    </div>
    <div class="card-titles">
        <h3>${album2Objects.title}</h3>
        <p>${album2Objects.contributors[0].name}</p>
    </div>
  </div>
  
  <div class="card">
    <div class="card-cover">
        <img src="${album3Objects.cover_medium}" alt="${album3Objects.title} ${album3Objects.contributors[0].name} cover">
    </div>
    <div class="card-titles">
        <h3>${album3Objects.title}</h3>
        <p>${album3Objects.contributors[0].name}</p>
    </div>
  </div>
  
  <div class="card">
    <div class="card-cover">
        <img src="${album4Objects.cover_medium}" alt="${album4Objects.title} ${album4Objects.contributors[0].name} cover">
    </div>
    <div class="card-titles">
        <h3>${album4Objects.title}</h3>
        <p>${album4Objects.contributors[0].name}</p>
    </div>
  </div>`;

}

window.onload = async() => {
    await displaySpotify();
}


    // let album2 = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/39949511")
    // let album2Objects = await album2.json();

    // let album3 = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/119606")
    // let album3Objects = await album3.json();

    // let album4 = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/125500082")
    // let album4Objects = await album4.json();