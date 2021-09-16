"use strict";
//numero 1
var pessoa = /** @class */ (function () {
    function pessoa(nome, sexo, idade) {
        this._nome = nome;
        this._sexo = sexo;
        this._idade = idade;
    }
    Object.defineProperty(pessoa.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            if (nome === "")
                throw new Error("Por favor preencha o nome");
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(pessoa.prototype, "sexo", {
        get: function () {
            return this._sexo;
        },
        set: function (sexo) {
            sexo = sexo.toLowerCase();
            if (sexo !== 'masculino' && sexo != 'feminino')
                throw new Error("coloque um sexo valido");
            this._sexo = sexo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(pessoa.prototype, "idade", {
        get: function () {
            return this._idade;
        },
        set: function (idade) {
            if (idade === 0)
                throw new Error("Por favor preencha a idade correta");
            this._idade = idade;
        },
        enumerable: false,
        configurable: true
    });
    pessoa.prototype.checkidade = function () {
        if (this._idade >= 18) {
            console.log("maior idade");
        }
        else if (this._idade < 18) {
            console.log("menor idade");
        }
    };
    return pessoa;
}());
var newpessoa = new pessoa("joao", "masculino", 18);
try {
    newpessoa.nome = "rex";
    newpessoa.sexo = "masculino";
    newpessoa.idade = 16;
    console.log(newpessoa.nome);
    console.log(newpessoa.sexo);
    console.log(newpessoa.idade);
}
catch (error) {
    console.log(console.error());
}
newpessoa.checkidade();
