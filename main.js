function Funcionario(funcao, nome, idade, salario,) {  // Classe chamada Funcionario com atributos como nome, idade, salario.
    this.funcao = funcao;
    this.nome = nome;
    this.idade = idade;
    this.salario = salario;
}


function Promovido(funcao, nome, idade, salario) { // Classe chamada Promovido herdando os atributos da classe Funcionario
    Funcionario.call(this, funcao, nome, idade, salario);
}

function aumentoSalario(funcao, nome, idade, salario) { // Classe chamada aumentoSalario herdando os atributos da classe Funcionario
    Funcionario.call(this, funcao, nome, idade, salario);
}


const funcionario1 = new Funcionario("Gerente", "João", "30 Anos", 7000,);  
const funcionario2 = new Funcionario("Desenvolvedor Jr", "Maria", "27 Anos", 3000); 
const funcionario3 = new Funcionario("Estagiario", "Lucas", "20", 1500)
const funcionarioPromovido = new Promovido("Desenvolvedor Pleno", "Maria", 27, 5000)
const aumentoParaFuncionario = new aumentoSalario ("Gerente", "João", "30 Anos", 8000)

console.log(funcionario1)
console.log(funcionario2)
console.log(funcionario3)
console.log(funcionarioPromovido)
console.log(aumentoParaFuncionario)




