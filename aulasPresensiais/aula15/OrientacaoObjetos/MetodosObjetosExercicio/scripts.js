let contaBancaria = {
    titular: "Marcus",
    saldo: 1000,
    depositar: function(novoValor) {return this.saldo + novoValor}

}

console.log(contaBancaria.depositar(500));


