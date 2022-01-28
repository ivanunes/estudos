// Map

function novoAluno(nome, idade){
    return {nome, idade}
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("João", 35),
]



alunosExtenso = [...alunos]

let contador = 0;
for (aluno of alunosExtenso){
    alunosExtenso[contador] = alunosExtenso[contador].nome + " tem " + alunosExtenso[contador].idade + " anos";
    contador++;
}

console.log(alunos);
console.log(alunosExtenso);

/*
function nomeIdade(aluno) {
    return aluno.nome + " tem " + aluno.idade + " anos";
}

console.log(alunos.map(nomeIdade));
*/

//---------------------------------------
console.log("------------------------------")

// Reduce

alunos1 = [...alunos]

function idadeDaTurma(total, aluno){
    return total + aluno.idade
}


let somaIdades = 0;
let contador1 = 0;
for (aluno of alunos1){
    somaIdades += alunos1[contador1].idade;
    contador1++;
}

console.log(somaIdades)

/*
console.log(alunos.reduce(idadeDaTurma, 0))
*/