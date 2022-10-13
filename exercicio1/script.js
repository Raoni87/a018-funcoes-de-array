const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}


function grandao(elemento) {
    const enorme = {...objeto,nome: nome.toUpperCase, profissao: profissao.toUpperCase,username: username.toUpperCase,senha: senha.toUpperCase};
    return enorme  
} 

function tudoNaLinha(elemento) {
    const enorme = {...objeto, textoCorrido: objeto.nome+ objeto.profissao+ objeto.username + objeto.senha}
    return enorme.tudoNaLinha
}

function funcao3(elemento, callback) {
    const resultado = callback(elemento)
    console.log("função 3", resultado);
    return resultado
}



