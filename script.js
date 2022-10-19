let ciao = "Saluto"
console.log(ciao);

// let carta = document.querySelector("card-row-album");
// carta.innerHTML =
// `<div class="card">
// <div class="card-cover">
//   <img style="max-width: 150px; max-height: fit-content;" src="https://e-cdns-images.dzcdn.net/images/cover/4e582c7d31de65fb27e4a11f5f2837f7/250x250-000000-80-0-0.jpg" alt="">
// </div>
// <div class="card-titles">
//   <h3>Blonde</h3>
//   <p>Frank Ocean</p>
// </div>
// </div>`;

// async function displaySpotify(){
//     let album1 = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/39915291")
//     let albumObjects = await album1.json();
//     //let arrayOfAlbum1 = albumObjects.data;
//     document.getElementsByClassName(".card-row-album").innerHTML =
//     `<div class="card">
//         <div class="card-cover">
//             <img style="max-width: 150px; max-height: fit-content;" src="${album1.cover_small}" alt="">
//         </div>
//         <div class="card-titles">
//             <h3> ${album1.title} </h3>
//             <p> ${album1.contributors[0].name} </p>
//         </div>
//     </div>`;


    // document.querySelector(".artist-img").innerHTML = `<img src="${arrayOfAlbum1[0].artist.picture}" alt="${arrayOfAlbum1[0].artist.name} photo">`;
}

window.onload = () => {
    displaySpotify();
}

