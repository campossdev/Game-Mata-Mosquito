

var width = 0
var height = 0
var vidas = 1
var tempo = 10
var mosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')
if (nivel === 'normal') {
	mosquitoTempo = 1500
}else if (nivel === 'dificil'){
	mosquitoTempo = 1000
}else if (nivel === 'pro'){
	mosquitoTempo = 750
}

function ajustaTamanhoPalcojogo(){
	width = window.innerWidth
	height = window.innerHeight
	console.log(width, height)
}

ajustaTamanhoPalcojogo()

var cronometro = setInterval(function () {
	tempo -= 1
	if (tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = 'vitoria.html'
	}else{
		document.getElementById('cronometro').innerHTML = tempo
	}
	
}, 1000)

function posicaoRandomica() {

	// Remover mosquito anterior caso exista //
	if (document.getElementById('mosquito')) {
	document.getElementById('mosquito').remove()

		if (vidas > 3) {
			window.location.href = 'fim_jogo.html'
		}else{

		document.getElementById('v' + vidas).src="img/coracao_vazio.png"
		vidas++
		}
	}
	var posicaox = Math.floor(Math.random() * height) -90
	var posicaoy = Math.floor(Math.random() * width)  -90

	posicaox = posicaox < 0 ? 0 : posicaox
	posicaox = posicaoy < 0 ? 0 : posicaoy

	console.log(posicaox, posicaoy)

	// Elemento HTML //
	var mosquito = document.createElement('img')
	mosquito.src ='img/mosca.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaox + 'px'
	mosquito.style.top = posicaoy + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function(){
		this.remove()
	}
	document.body.appendChild(mosquito)
	console.log(ladoAleatorio())

}

function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3)

	switch(classe){

		case 0:
			return 'mosquito1'
		case 1:
			return 'mosquito2'
		case 2:
		return 'mosquito3'	
	}	

}

function ladoAleatorio(){
	var classe = Math.floor(Math.random() * 2)

	switch(classe){

		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'
			
	}	
}
