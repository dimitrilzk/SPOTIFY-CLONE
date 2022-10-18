async function visualizeAlbumInfo() {
  let album = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/39915291");
  let res = await album.json();
  document.querySelector(".album-info").innerHTML = `<div class="album-img">
      <img src="${res.cover_medium}" alt="">
    </div>
    <div class="album-details">
      <h6>album</h6>
      <h1>${res.title}</h1>
    <div class="artista-img">
      <img src="${res.contributors[0].picture_small}" alt="">
      <h5>${res.contributors[0].name}</h5>
    </div>
  </div>`;
}

window.onload = () => {
  visualizeAlbumInfo();
};
