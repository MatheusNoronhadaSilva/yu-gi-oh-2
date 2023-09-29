'use strict'

async function pegarImagens(){
    const endPoint ='https://db.ygoprodeck.com/api/v7/cardinfo.php?type=spell%20card'
    const response = await fetch(endPoint)
    const imagens = await response.json()
    return imagens.data
}

function criarTagImg (imagem) {
    
    const galeria = document.getElementById('cartas')
    const tagImg = document.createElement('img')
    tagImg.src = imagem.card_images[0].image_url
    galeria.appendChild(tagImg)
}

async function carregarFotos(){
    const imagens = await pegarImagens()
    if(imagens != undefined) {
        imagens.forEach(criarTagImg)
    } else {
        console.log('ERRRRROOOOO')
    }
}

carregarFotos()