class Animal {
    #nome; #patas;
    constructor(nome, patas) {
        this.#nome = nome;
        this.#patas = patas;
    }

    get nome() {return this.#nome};

    emitirSom() {
        return `Som genérico`;
    }
}

class Cachorro extends Animal {
    constructor(nome, patas) {
        super(nome, patas);
    }

    emitirSom() {
        return `Au au`;
    }
}

class Gato extends Animal {
    constructor(nome, patas) {
        super(nome, patas);
    }

    emitirSom() {
        return `Miaw`;
    }
}

class Passaro extends Animal {
    constructor(nome, patas) {
        super(nome, patas);
    }

    emitirSom() {
        return `Bem te vi`;
    }
}

let inputCachorro = document.getElementById('inputCachorro').value;
let inputGato = document.getElementById('inputGato').value;
let inputPassaro = document.getElementById('inputPassaro').value;

let adicionaCachorro = document.getElementById('btn-cachorro');
let adicionaGato = document.getElementById('btn-gato');
let adicionaPassaro = document.getElementById('btn-passaro');

adicionaCachorro.addEventListener('click', function () {
    
})









