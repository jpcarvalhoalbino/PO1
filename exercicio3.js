"use strict";
var fatura = /** @class */ (function () {
    function fatura(numero, descricao, qtdc, preco) {
        this._numero = numero;
        this._descricao = descricao;
        this._qtdc = qtdc;
        this._preco = preco;
    }
    fatura.prototype.valorfatura = function () {
        return this._qtdc * this._preco;
    };
    return fatura;
}());
var fatu = new fatura(20000, 'eletrecidade', 50, 20);
var valorfatura = fatu.valorfatura();
console.log(valorfatura);
console.log(fatu);
