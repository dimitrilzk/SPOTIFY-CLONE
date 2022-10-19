async function lista() {

    let cambiamento = await fetch ('https://striveschool-api.herokuapp.com/api/deezer/search?q=frank ocean')
    let convertito = await cambiamento.json()
    let convertimentoData = convertito.data
    for (let i = 0; i < convertimentoData.length; i++){
        document.getElementById('list').innerHTML += `<div id="list-item">
        <div class="allineamento">
        <div class="number-item">${[i]}</div>
        <img class="img-album" src="${convertimentoData[i].album.cover_small}">
        ${convertimentoData[i].title}
        <div class="visualize">
            ${convertimentoData[i].rank}
        </div>
        <div class="duration">
        ${convertimentoData[i].duration}
        </div>
        </div>
        <div>`
    }
}
window.onload = async() => {
    await lista()
}
