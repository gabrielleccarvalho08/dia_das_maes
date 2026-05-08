const listaFrases = [
    "Eu e mamãe abraçadas",
    "Foto juntas quando eu tinha 1 ano",
    "Selfie juntas",
    "Brincando e rindo muito com a mãe",
    "Sempre sorrindo com a mamis",
    "Beijando a bochecha da mamãe",
    "Ariane, Theo e Gabi",
    "Na cama com a mamãe",
    "Selfie de novo",
    "Mais uma selfie",
    "Fazendo pose com a mamãe",
    "Deitada com a mamãe",
    "Mamãe tirando foto",
    "Eu dormindo no colo da mamãe",
    "Primeira praia"
]

const listaImagens = [
    "fotos/foto1.jpeg",
    "fotos/foto2.jpeg",
    "fotos/foto3.jpeg",
    "fotos/foto4.jpeg",
    "fotos/foto5.jpeg",
    "fotos/foto6.jpeg",
    "fotos/foto7.jpeg",
    "fotos/foto8.jpeg",
    "fotos/foto9.jpeg",
    "fotos/foto10.jpeg",
    "fotos/foto11.jpeg",
    "fotos/foto12.jpeg",
    "fotos/foto13.jpeg",
    "fotos/foto14.jpeg",
    "fotos/foto15.jpeg"
]

const frase = document.getElementById('frase')
const imagem = document.getElementById('imagem')
const counter = document.getElementById('counter')
let indiceAtual = 0
let ultimoIndice = listaFrases.length - 1

frase.textContent = listaFrases[0]
imagem.src = listaImagens[0]
atualizarContador()

function proximaFoto() {
    if (indiceAtual < ultimoIndice) {
        indiceAtual++
    } else if (indiceAtual == ultimoIndice) {
        indiceAtual = 0
    }

    // Efeito de fade + scale na troca
    imagem.style.opacity = '0.5'
    imagem.style.transform = 'scale(0.95)'
    
    setTimeout(() => {
        frase.textContent = listaFrases[indiceAtual]
        imagem.src = listaImagens[indiceAtual]
        imagem.style.opacity = '1'
        imagem.style.transform = 'scale(1)'
        atualizarContador()
        
        // Pequena vibração de alegria no contador
        counter.style.transform = 'scale(1.1)'
        setTimeout(() => {
            counter.style.transform = 'scale(1)'
        }, 200)
    }, 200)
}

function atualizarContador() {
    counter.innerHTML = `${indiceAtual + 1} de ${listaFrases.length} momentos especiais`
}

// FUNÇÕES DA CARTINHA ESPECIAL
function abrirCartinha() {
    const modal = document.getElementById('envelopeModal')
    modal.style.display = 'block'
    
    // Resetar estados do envelope e carta
    const envelope = document.getElementById('envelope')
    const letter = document.getElementById('letter')
    const flap = document.querySelector('.envelope-flap')
    
    if (envelope) envelope.classList.remove('open')
    if (letter) letter.classList.remove('open')
    if (flap) flap.classList.remove('open')
}

function fecharCartinha() {
    const modal = document.getElementById('envelopeModal')
    modal.style.display = 'none'
    
    // Resetar para a próxima vez que abrir
    const envelope = document.getElementById('envelope')
    const letter = document.getElementById('letter')
    const flap = document.querySelector('.envelope-flap')
    
    if (envelope) envelope.classList.remove('open')
    if (letter) letter.classList.remove('open')
    if (flap) flap.classList.remove('open')
}

function abrirEnvelope() {
    const envelope = document.getElementById('envelope')
    const letter = document.getElementById('letter')
    const flap = document.querySelector('.envelope-flap')
    
    // Adicionar classe para abrir o envelope
    if (envelope) envelope.classList.add('open')
    if (flap) flap.classList.add('open')
    
    // Pequeno delay para mostrar a carta
    setTimeout(() => {
        if (letter) letter.classList.add('open')
    }, 300)
}

// Fechar modal ao clicar fora
window.onclick = function(event) {
    const modal = document.getElementById('envelopeModal')
    if (event.target == modal) {
        fecharCartinha()
    }
}