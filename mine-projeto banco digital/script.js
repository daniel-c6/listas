// Solicita ao usuário que insira uma senha e armazena o valor como uma string na variável 'user'
let user = prompt("digite seu usuario:");

// Solicita novamente ao usuário que insira uma senha, mas desta vez converte o valor para um número
// e armazena na variável 'password'
let password = Number(prompt("digite sua senha:"));

// Define uma variável chamada 'userADM' e atribui a ela o valor "admin", que representa o nome de usuário do administrador
let userADM = "admin";
let passwordADM = 123456; 

if(user = userADM && password == passwordADM){
    alert("logado")
    function menu(){
        let opcoes = Number(prompt(`
        [1] ver saldo
        [2] realizar saque
        [3] realizae depósito
        [4] transferencia para outro usuario
        [6] alterar senha
        [7] sair.
        `))
    
        return opcoes;
    }
} else{
    alert("erro") 
}

let opcoes = menu();    