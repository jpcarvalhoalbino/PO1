class veiculos{


    private _modelo: string;
    private _marca:string;
    private _ano:number;
    private _valorlocacao:number;
    private _qtd:number;


    constructor(modelo: string, marca:string,ano:number,valorlocacao:number,qtd:number){
        this._modelo=modelo
        this._marca=marca
        this._ano=ano
        this._valorlocacao=valorlocacao
        this._qtd=qtd
    }

    get modelo(){
        return this._modelo
    }
    get marca(){
        return this._marca
    }
    get ano(){
        return this._ano
    }
    get valorlocaca(){
        return this._valorlocacao
    }
    get qtdo(){
        return this._qtd
    }

    set modelo(modelo:string){
        validadata(modelo, "modelo");
        if(modelo ==="") throw new Error("Por favor preencha com um modelo");
        this._modelo=modelo
    }

    set marca(marca:string){
        validadata(marca, "marca")
        if(marca ==="") throw new Error("Por favor preencha com uma modelo")
        this._marca=marca

    }

    set ano(ano:number){
        validadata(ano, "ano")
        if(ano ===0) throw new Error("Por favor preencha com um ano");
        this._marca
    }

    set valorlocacao(valorlocacao:number){
        validadata(valorlocacao, "valorlocacao")
        if (valorlocacao ===0) 
        throw new Error("Por favor preencha com um ano");
        this._valorlocacao
            
        
    }

    set qtd(qtd:number){
        validadata(qtd, "qtd")
        if (qtd ===0) 
            throw new Error("Por favor preencha com o dia correro");
            this._qtd
    }

    trip (dias: number, valorlocaca:number): number{
        return dias * valorlocaca
    }
}

function validadata(data:any, mesagem:string){
    if(data=="" || data <=0){
        throw new Error('${mesagem} invalido.');
    }
}







const newcarro= new veiculos ("ponto","fiat", 2010, 2000, 5 );
try{
    newcarro.modelo= "ferrari";
    newcarro.marca="ferrari";
    newcarro.ano=2012;
    newcarro.valorlocacao=7000;
    newcarro.qtd=2

    console.log(newcarro. modelo);
    console.log(newcarro.marca);
    console.log(newcarro.ano);
    console.log(newcarro.valorlocaca);
    console.log(newcarro.qtd);
    console.log(newcarro.trip(newcarro.qtd,newcarro.valorlocacao));
} catch(erro:any){
    console.log(erro.mesagem);
}

