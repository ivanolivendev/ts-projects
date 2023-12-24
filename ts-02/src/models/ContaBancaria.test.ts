import { ContaBancaria } from "./contaBancaria";

describe('Funcionalidades da conta bancaria',()=>{
test('cria conta bancaria'),()=>{
       const conta = new ContaBancaria()
             expect(conta.numero).toBe('xxxx')
}
})