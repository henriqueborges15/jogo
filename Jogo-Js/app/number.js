const menorV = 1
const maiorV = 1000
const secretNumber = gerarNumero()

function gerarNumero() {
   return parseInt(Math.random()*maiorV + 1)
}

console.log('Número: ', secretNumber)

const elementoMenorV = document.getElementById('menor-valor')
elementoMenorV.innerHTML = menorV

const elementoMaiorV = document.getElementById('maior-valor')
elementoMaiorV.innerHTML = maiorV