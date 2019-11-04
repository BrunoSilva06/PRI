function apagaAluno(ident){
    console.log('Vou apagar o aluno: ' + ident)
    axios.delete('/Alunos/' + ident)
        .then(response => window.location.assign('/Alunos'))
        .catch(error => console.log(error))
}
