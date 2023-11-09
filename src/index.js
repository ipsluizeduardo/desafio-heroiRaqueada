let nomeJogador = "Dudu";
let saldoVitorias;
let nivel;

function CalcDerrotaVitoria(vitoria, derrota) {
    let resultado = vitoria - derrota;
    return resultado;
}

saldoVitorias = CalcDerrotaVitoria(60, 5)

switch (true) {
    case saldoVitorias <= 10:
        nivel = "Ferro";
        break;
    case saldoVitorias >= 11 && saldoVitorias <= 20:
        nivel = "Bronze";
        break;
    case saldoVitorias >= 21 && saldoVitorias <= 50:
        nivel = "Prata";
        break;
    case saldoVitorias >= 51 && saldoVitorias <= 80:
        nivel = "Ouro";
        break;
    case saldoVitorias >= 81 && saldoVitorias <= 90:
        nivel = "Diamante";
        break;
    case saldoVitorias >= 91 && saldoVitorias <= 100:
        nivel = "Lendario";
        break;
    case saldoVitorias >= 101:
        nivel = "Imortal";
        break;
    default:
        console.log("Heroi sem classificação!");
}

console.log(`O Herói tem de saldo de vitórias de ${saldoVitorias} e está no ranque de ${nivel}`);