function saldoRanqueadas(vitorias, derrotas) {
   
    let saldoVitorias = vitorias - derrotas;
    
    
    let nivel;
    
    
    if (vitorias < 10) {
        nivel = "Ferro"
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze"
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata"
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro"
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante"
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }
    
    // Retorna tanto o saldo de vitórias quanto o nível
    return {
        saldoVitorias: saldoVitorias,
        nivel: nivel
    }
}

let resultado = saldoRanqueadas(67, 10)

console.log("O herói tem um saldo de " + resultado.saldoVitorias + " vitórias e está no nível " + resultado.nivel)