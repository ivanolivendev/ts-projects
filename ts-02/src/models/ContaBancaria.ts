export class ContaBancaria {
    private  _saldo:number;
    private _numero:string;
    private _agencia:string;


    constructor(){
        this._saldo=0
        this._agencia= '123'
         this._numero = "xxxx"

    }

    get numero (): string{
        return this._numero
    }

    set numero (valor:string){
        if(this._validarNumero(valor)){
            this.numero=valor
        }
    }
    

  

    consultar (){
        return this._saldo
    }

    depositar (valor:number):void{
        if(valor>=0){
            this._saldo+=valor
        }
    }

    sacar (valor:number):void{
        if(valor>=0 && valor<this._saldo){
            this._saldo-=valor
        }

        else(
            console.log("_saldo insuficiente."+` _saldo Atual:$${this._saldo}. Tentativa de saque: ${valor}`)
        )
       
    }

    private _validarNumero(numero:string):boolean{

        const regex = /^\d{2}-\d{1}$/

        if(regex.test(numero)){            
            return true
        }
        return false
        
    }



}