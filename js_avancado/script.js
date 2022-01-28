function speakGeneric() {
    console.log(this.sound);
}

let dog = {
    sound: "Au Au",
    speak: speakGeneric
}

let cat = {
    sound: "Miau",
    speak: speakGeneric
}

dog.speak();
cat.speak();

let bindedFunction = speakGeneric.bind(cat);
bindedFunction();

//

let usuarios = ["Adriano", "Marcia", "José"];

function inserirUsuario(nome) {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            usuarios.push(nome);
            let error = false;

            if (nome.length >= 5) {
                error = true;
            }

            if (!error) {
                resolve();
            }
            else {
                reject({ msg: "Erro" })
            }
        }, 1000)
    })
    return promise;
}

function listarUsuarios() {
    console.log(usuarios);
}

listarUsuarios();
inserirUsuario("Ivan")
    .then(listarUsuarios)
    .catch((error) => {
        console.log(error.msg)
    });

/*Ou 
 async function executar(){
    await inserirUsuario("Ivan");
    listarUsuario();
}
executar();
*/

function verificaIdade(idade) {

    let p = new Promise((resolve, reject) => {

        setTimeout(() => {

            let idadeAtual = idade;

            if (idadeAtual >= 18) {
                resolve('Pode entrar amigão');
            } else {
                reject('Menor só com a xuxa');
            }

        }, 1100)

    });

    p.then((mensagem) => {
        console.log('Maior de idade: ' + mensagem);
    })
    .catch((erro) => {
        console.log('Menor de idade: ' + erro);
    });

}

verificaIdade(18);

//--------------------------
console.log("=======================")

function novoAluno(nome, idade){
    return {nome, idade}
}

let alunos = [
    novoAluno("Marcos", 23),
    novoAluno("José", 45),
    novoAluno("Maria", 29),
    novoAluno("João", 35)
]

/*
for (let aluno of alunos) {
    if (aluno.idade < 30) {
        console.log(aluno.nome)
    }
}
*/

function temMenosde30(aluno){
    return aluno.idade < 30
}

let alunosComMenosde30 = alunos.filter(temMenosde30)

console.log(alunosComMenosde30)

//

function nomeIdade(aluno) {
    return aluno.nome + " tem " + aluno.idade + " anos";
}

console.log(alunos.map(nomeIdade))

console.log("=======================")