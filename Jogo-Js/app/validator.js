function verificaChute(chute) {
    const numero = +chute

    if (Number.isNaN(numero)){
        if (chute.toUpperCase() === "GAME OVER"){
            document.body.innerHTML = `
            <h2>Game Over</h2>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
            `
            document.body.style.backgroundColor = "red"
        } else{
        elementoChute.innerHTML += '<div>Valor Invalido, deve ser numerico</div>'
        return
        }
    }

    if (numeroMaiorOuMenor(numero)) {
        elementoChute.innerHTML += `
        <div>valor invalido: deve ser entre ${menorV} e ${maiorV}</div>
        `
        return
    }
    if (numero === secretNumber) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${secretNumber}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if(numero > secretNumber) {
        elementoChute.innerHTML += `
        <div>O número secreto é <i class="fa-solid fa-arrow-down"></i> que ${numero}</div>
        `
    } else if(numero < secretNumber) {
        elementoChute.innerHTML += `
        <div>O número secreto é <strong><i class="fa-solid fa-arrow-up"></i></strong> que ${numero}</div>
        `
    }
    
    function numeroMaiorOuMenor(numero) {
        return numero > maiorV || numero < menorV
    }

    
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }    
})
