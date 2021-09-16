"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ImpostoDeRenda = /** @class */ (function () {
    function ImpostoDeRenda(nome, rendaAnual) {
        this._nome = nome;
        this._rendaAnual = rendaAnual;
    }
    Object.defineProperty(ImpostoDeRenda.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            if (nome.trim() === '') {
                console.log('Nome inválido');
                return;
            }
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImpostoDeRenda.prototype, "rendaAnual", {
        get: function () {
            return this._rendaAnual;
        },
        set: function (rendaAnual) {
            if (rendaAnual === 0) {
                console.log('Renda anual inválida');
                return;
            }
            this._rendaAnual = rendaAnual;
        },
        enumerable: false,
        configurable: true
    });
    return ImpostoDeRenda;
}());
var ImpostoDeRendaPessoaFisica = /** @class */ (function (_super) {
    __extends(ImpostoDeRendaPessoaFisica, _super);
    function ImpostoDeRendaPessoaFisica(nome, rendaAnual, gastosaude) {
        var _this = _super.call(this, nome, rendaAnual) || this;
        _this._gastoSaude = gastosaude;
        return _this;
    }
    Object.defineProperty(ImpostoDeRendaPessoaFisica.prototype, "gastoSaude", {
        get: function () {
            return this._gastoSaude;
        },
        set: function (gastoSaude) {
            if (gastoSaude < 0) {
                console.log('invalido');
                return;
            }
            this._gastoSaude = gastoSaude;
        },
        enumerable: false,
        configurable: true
    });
    ImpostoDeRendaPessoaFisica.prototype.calcularImposto = function () {
        if (this.rendaAnual < 20000) {
            return this.rendaAnual * 0.15 - (this.gastoSaude === 0 ? 0 : this.gastoSaude / 2);
        }
        return this.rendaAnual * 0.25 - (this.gastoSaude === 0 ? 0 : this.gastoSaude / 2);
    };
    return ImpostoDeRendaPessoaFisica;
}(ImpostoDeRenda));
var ImpostoDeRendaPessoaJuridica = /** @class */ (function (_super) {
    __extends(ImpostoDeRendaPessoaJuridica, _super);
    function ImpostoDeRendaPessoaJuridica(nome, rendaAnual, numeroFuncionarios) {
        var _this = _super.call(this, nome, rendaAnual) || this;
        _this._numeroFuncionarios = numeroFuncionarios;
        return _this;
    }
    Object.defineProperty(ImpostoDeRendaPessoaJuridica.prototype, "numeroFuncionarios", {
        get: function () {
            return this._numeroFuncionarios;
        },
        set: function (numeroFuncionarios) {
            if (numeroFuncionarios === 0) {
                console.log('Número de funcionários inválidos');
                return;
            }
            this._numeroFuncionarios = numeroFuncionarios;
        },
        enumerable: false,
        configurable: true
    });
    ImpostoDeRendaPessoaJuridica.prototype.calcularImposto = function () {
        if (this._numeroFuncionarios > 10) {
            return this.rendaAnual * 0.14;
        }
        return this.rendaAnual * 0.16;
    };
    return ImpostoDeRendaPessoaJuridica;
}(ImpostoDeRenda));
var impostoDeRendaPessoaJuridica = new ImpostoDeRendaPessoaJuridica('Reis', 537, 30);
var impostoPessoaJuridica = impostoDeRendaPessoaJuridica.calcularImposto();
console.log(impostoDeRendaPessoaJuridica);
console.log(impostoPessoaJuridica);
var impostoDeRendaPessoaFisica = new ImpostoDeRendaPessoaFisica('Reis', 80, 9);
var impostoPessoaFisica = impostoDeRendaPessoaFisica.calcularImposto();
console.log(impostoDeRendaPessoaFisica);
console.log(impostoPessoaFisica);
