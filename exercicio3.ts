class fatura{
    private _numero:number;
    private _descricao:string;
    private _qtdc:number;
    private _preco:number;

    constructor(numero:number, descricao:string,qtdc:number,preco:number){
        this._numero=numero;
        this._descricao=descricao;
        this._qtdc=qtdc;
        this._preco=preco;
    }

    
    public valorfatura (){
        return this._qtdc * this._preco;
    }
}

const fatu = new fatura(20000, 'eletrecidade', 50,20)
const valorfatura = fatu.valorfatura()


console.log(valorfatura)
console.log(fatu)