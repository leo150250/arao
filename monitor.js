const divRelogio=document.getElementById("relogio");
const minutos = 1000 * 60;
const hora = minutos * 60;
const dia = hora * 24;
const ano = dia * 365;
var doisPontos=":";
function tiqueRelogio() {
	if (doisPontos==":") {
		doisPontos=" ";
	} else {
		doisPontos=":";
	}
	let horasAtual = Math.round(Date.now() / hora);
	let minutosAtual = Math.round(Date.now() / minutos);
	divRelogio.innerHTML=horasAtual.toString().padStart(2,"0")+doisPontos+minutosAtual.toString().padStart(2,"0");
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