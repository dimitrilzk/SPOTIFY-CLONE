async function lista() {
  let queryString2 = new URLSearchParams(window.location.search);
  let idArtist = queryString2.get("id");
  let cambiamento = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/search?q=${idArtist}`
  );
  let convertito = await cambiamento.json();
  let convertimentoData = convertito.data;
  for (let i = 0; i < convertimentoData.length; i++) {
    document.getElementById("list").innerHTML += `<div id="list-item">
        <div class="allineamento">

        <div class="number-item">${i + 1}</div>
        <img class="img-album" src="${convertimentoData[i].album.cover_small}">
        <div class="contenitor-list">
        ${convertimentoData[i].title}
        </div>
        <div class="visualize">
            ${convertimentoData[i].rank}
        </div>
        <div class="duration">
        ${convertimentoData[i].duration}
        </div>
        </div>
        <div>`;
  }
}
window.onload = async () => {
  await lista();
};
