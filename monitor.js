//Relógio
const divRelogio=document.getElementById("relogio");
var dataAtual=new Date();
var doisPontos=":";
function tiqueRelogio() {
	if (doisPontos==":") {
		doisPontos=" ";
	} else {
		doisPontos=":";
	}
	let horasAtual = dataAtual.getHours().toString().padStart(2,"0");
	let minutosAtual = dataAtual.getMinutes().toString().padStart(2,"0");
	divRelogio.innerHTML=horasAtual+doisPontos+minutosAtual;
}
setInterval(tiqueRelogio,500);

//Pedidos de oração
const divOracoes=document.getElementById("oracoes");
class Oracao {
	numPedido=0;
	ativo=true;
	divOracao=null;
	constructor(argTexto) {
		this.numPedido=pedidosOracao.length;
		this.divOracao=document.createElement("div");
		this.divOracao.classList.add("oracao");
		let titulo=document.createElement("h1");
		titulo.innerHTML="Oração #"+this.numPedido;
		let botaoOk=document.createElement("button");
		botaoOk.innerHTML="OK";
		botaoOk.onclick=(e)=>{
			ativo=false;
			divOracoes.removeChild(this.divOracao);
		}
		titulo.appendChild(botaoOk);
		let texto=document.createElement("p");
		texto.innerHTML=argTexto;
		this.divOracao.appendChild(titulo);
		this.divOracao.appendChild(texto);
		divOracoes.appendChild(this.divOracao);
	}
}
var pedidosOracao=[];
var numPedidos=0;
function criarPedidoOracao(argTexto) {
	let novoPedido=new Oracao(argTexto);
	pedidosOracao.push();
	numPedidos++;
}
criarPedidoOracao("Ora aqui pra eu por favor");
criarPedidoOracao("Ore pela mídia da SECOM, os caras são muito bons");
criarPedidoOracao("Faz mais essa oração aqui só pra somar 3 orações");

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