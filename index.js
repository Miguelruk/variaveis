const prompt = require('prompt-sync')
  const entrada = prompt('');

const nomeCompleto = "Miguel de Mello Bomrruk";
const anoNascimento = 2006;
let anoAtual = 2024;
let idade = 17;
const anoFormatura = 2028;

console.log("olá eu sou " +  nomeCompleto + " estamos no ano " + anoAtual + " minha idade é " + idade + " anos " + " e nasci no ano de " + anoNascimento); 

idade = idade + 1;
anoAtual = anoAtual + 1;
console.log("Eu vou fazer " + idade + " anos, ano que vem, em " + anoAtual + ". Quero estar cursando engenharia de software, e pretendo me formar em " + anoFormatura);


//Agência de viagens Hawaii Paris China Russia Cuba
const listaDeDestinos = new Array(
  "hawaii",
  "russia",
  "china",
  "Paris",
  "cuba"
);
var idadeComprador = entrada("Qual sua idade?");
var nomeComprador = entrada("Qual seu nome?");  
if(idadeComprador >= 18) {
  console.log("Ola Senhor(a) " + nomeComprador)
  console.log("Comprador maior de idade");
  console.log("Destinos disṕniveis: " + listaDeDestinos) 


;
}
console.log(listaDeDestinos);
console.log(listaDeDestinos[3]);
listaDeDestinos.push("Coronel Vivida");
console.log(listaDeDestinos);
listaDeDestinos.push("Campo Mourão");
console.log*(listaDeDestinos);
listaDeDestinos.push("Ponta grossa");
console.log(listaDeDestinos);
listaDeDestinos.push("Cabo Frio");
console.log(listaDeDestinos);

if(idadeComprador <= 18)
console.log("O senhor(a)não é maior de idade")

var contador= 0;
while(contador <9){
console.log(listaDeDestinos[contador]);  
  contador++;

  
}
var destino = entrada("Digite um numero que corresponde ao destino(0-8)");
console.log(`destino selecionado: ${listaDeDestinos[destino]}`);













































































