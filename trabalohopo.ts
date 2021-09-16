//numero 1

class pessoa{


    


        private _nome:string;
        private _sexo:string;
        private _idade:number;

        constructor( nome: string, sexo: string, idade: number){
            this._nome=nome;
            this._sexo=sexo;
            this._idade=idade;
        }

        get nome(){
            return this._nome
        }

        get sexo(){
            return this._sexo
        }
        
        get idade(){
            return this._idade
        }


        set nome( nome: string){
            if(nome ==="") throw new Error("Por favor preencha o nome");
             this._nome=nome
           
        }

        set sexo(sexo: string){
            sexo=sexo.toLowerCase()
            if (sexo !== 'masculino' && sexo != 'feminino')
            throw new Error("coloque um sexo valido");
            
             this._sexo=sexo

        }
        
        set idade(idade: number){
            if(idade ===0) throw new Error("Por favor preencha a idade correta");
            this._idade=idade;

        }
        checkidade(): void{
            if(this._idade>=18) {
                console.log("maior idade")
                }else if (this._idade<18){
                    console.log("menor idade")
                }
            }
            
}


const newpessoa = new pessoa("joao", "masculino",18);
try{
    newpessoa.nome="rex";
    newpessoa.sexo="masculino";
    newpessoa.idade=16;

    console.log(newpessoa.nome);
    console.log(newpessoa.sexo);
    console.log(newpessoa.idade);

} catch (error){
    console.log(console.error());
}
newpessoa.checkidade()

   

