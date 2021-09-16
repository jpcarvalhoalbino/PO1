class ImpostoDeRenda { 
    private _nome: string 
    private _rendaAnual: number 
    constructor(nome: string, rendaAnual: number) { 
        this._nome = nome; 
        this._rendaAnual = rendaAnual; 
    } public get nome() { 
        return this._nome; 
    } 
    public set nome(nome: string) { 
    if (nome.trim() === '') { 
    console.log('Nome inválido'); 
    return; } 
    this._nome = nome; 
    } 
    public get rendaAnual() {
    return this._rendaAnual; 
    } 
    public set rendaAnual(rendaAnual: number) {
     if (rendaAnual === 0) { 
    console.log('Renda anual inválida'); 
    return; } 
    this._rendaAnual = rendaAnual; } 
}

class ImpostoDeRendaPessoaFisica extends ImpostoDeRenda { 
    private _gastoSaude: number; 

    constructor (nome:string, rendaAnual:number,gastosaude:number){
    super(nome, rendaAnual);
    this._gastoSaude=gastosaude
    }

    public get gastoSaude(){
        return this._gastoSaude
    }

    public set gastoSaude(gastoSaude:number){
        if(gastoSaude<0){
            console.log('invalido')
            return;
        }
        this._gastoSaude=gastoSaude;
    }
    public calcularImposto() { 
        if (this.rendaAnual < 20000) {
        return this.rendaAnual * 0.15 - (this.gastoSaude === 0 ? 0 : this.gastoSaude / 2); 
    } 
        return this.rendaAnual * 0.25 - (this.gastoSaude === 0 ? 0 : this.gastoSaude / 2);
    }
}

class ImpostoDeRendaPessoaJuridica extends ImpostoDeRenda { 
    private _numeroFuncionarios: number 
    constructor (nome: string, rendaAnual: number, numeroFuncionarios: number) {
    super(nome, rendaAnual); 
    this._numeroFuncionarios = numeroFuncionarios; 
    } 
    public get numeroFuncionarios() 
    {
    return this._numeroFuncionarios; 
    } 
    
    public set numeroFuncionarios(numeroFuncionarios: number) { 
    if (numeroFuncionarios === 0) { 
    console.log('Número de funcionários inválidos') 
    return; }
    this._numeroFuncionarios = numeroFuncionarios 
    } public calcularImposto() { 
    if (this._numeroFuncionarios > 10) { 
    return this.rendaAnual * 0.14; 
    } 
    return this.rendaAnual * 0.16; 
    } 
} 

const impostoDeRendaPessoaJuridica = new ImpostoDeRendaPessoaJuridica('Reis', 537, 30)
const impostoPessoaJuridica = impostoDeRendaPessoaJuridica.calcularImposto()
console.log( impostoDeRendaPessoaJuridica)
console.log( impostoPessoaJuridica)

const impostoDeRendaPessoaFisica = new ImpostoDeRendaPessoaFisica('Reis', 80, 9)
const impostoPessoaFisica = impostoDeRendaPessoaFisica.calcularImposto()
console.log( impostoDeRendaPessoaFisica)
console.log(impostoPessoaFisica)
    
    