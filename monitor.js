const divRelogio=document.getElementById("relogio");
var doisPontos=":";
function tiqueRelogio() {
	if (doisPontos==":") {
		doisPontos=" ";
	} else {
		doisPontos=":";
	}
	divRelogio.innerHTML="20"+doisPontos+"14";
	console.log("FOI!");
}
setInterval(tiqueRelogio,500);

//Pedidos de oração
class Oracao {
	
}

//Alerta
const divAlerta=document.getElementById("alerta");
function ativarAlerta() {
	exibirAlerta();
	setTimeout(sumirAlerta,250);
	setTimeout(exibirAlerta,500);
	setTimeout(sumirAlerta,750);
	setTimeout(exibirAlerta,1000);
	setTimeout(sumirAlerta,1250);
}
function exibirAlerta() {
	divAlerta.style.opacity="1";
	divAlerta.style.border="20rem solid #FF0";
	divAlerta.style.width="calc(100% - 40rem)";
	divAlerta.style.height="calc(100% - 40rem)";
}
function sumirAlerta() {
	divAlerta.style.opacity="0";
	divAlerta.style.border="0em solid #FF0";
	divAlerta.style.width="100%";
	divAlerta.style.height="100%";
}