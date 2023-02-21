import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardola", 11122233344);
const cliente2 = new Cliente("Joabe", 12345678901);

let numeroDeContas = 0;

const contaCorrenteRicardola = new ContaCorrente(1001, cliente1);
// contaCorrenteRicardola.depositar(500);

const conta2 = new ContaCorrente(1002, cliente2);

let valor = 200;
// contaCorrenteRicardola.transferir(200, conta2);
// console.log(cliente2);
console.log(ContaCorrente.numeroDeContas);
