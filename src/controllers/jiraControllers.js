var webHook = {
  em_analise:"",
  a_fazer:"",
  fazendo:"",
  pausa:"",
  impedimento:"",
  concluido:"",
  finalisada:""
}
module.exports = {
    em_analise(request, response) {
    // pegar os dados do request body
    const data = request.body
    var tarefa_pai = data.fields.issuelinks[0].outwardIssue.key
    var xhr = new XMLHttpRequest()
    var dados = {
      issue= [
        tarefa_pai,
      ]
    }
    xhr.open('POST', webHook.em_analise)
    request.setRequestHeader('Content-Type', 'application/json')
    xhr.send(dados)
    //Retorno de resposta
    return dados
  },
  a_fazer(request, response) {
    // pegar os dados do request body
    const data = request.body
    var tarefa_pai = data.fields.issuelinks[0].outwardIssue.key
    var xhr = new XMLHttpRequest()
    var dados = {
      issue= [
        tarefa_pai,
      ]
    }
    xhr.open('POST', webHook.em_analise)
    request.setRequestHeader('Content-Type', 'application/json')
    xhr.send(dados)
    //Retorno de resposta
    return dados
  },
  fazendo(request, response) {
    // pegar os dados do request body
    const data = request.body
    var tarefa_pai = data.fields.issuelinks[0].outwardIssue.key
    var xhr = new XMLHttpRequest()
    var dados = {
      issue= [
        tarefa_pai,
      ]
    }
    xhr.open('POST', webHook.em_analise)
    request.setRequestHeader('Content-Type', 'application/json')
    xhr.send(dados)
    //Retorno de resposta
    return dados
  },
  pausa(request, response) {
    // pegar os dados do request body
    const data = request.body
    var tarefa_pai = data.fields.issuelinks[0].outwardIssue.key
    var xhr = new XMLHttpRequest()
    var dados = {
      issue= [
        tarefa_pai,
      ]
    }
    xhr.open('POST', webHook.em_analise)
    request.setRequestHeader('Content-Type', 'application/json')
    xhr.send(dados)
    //Retorno de resposta
    return dados
  },
  impedimento(request, response) {
    // pegar os dados do request body
    const data = request.body
    var tarefa_pai = data.fields.issuelinks[0].outwardIssue.key
    var xhr = new XMLHttpRequest()
    var dados = {
      issue= [
        tarefa_pai,
      ]
    }
    xhr.open('POST', webHook.em_analise)
    request.setRequestHeader('Content-Type', 'application/json')
    xhr.send(dados)
    //Retorno de resposta
    return dados
  },
  concluido(request, response) {
    // pegar os dados do request body
    const data = request.body
    var tarefa_pai = data.fields.issuelinks[0].outwardIssue.key
    var xhr = new XMLHttpRequest()
    var dados = {
      issue= [
        tarefa_pai,
      ]
    }
    xhr.open('POST', webHook.em_analise)
    request.setRequestHeader('Content-Type', 'application/json')
    xhr.send(dados)
    //Retorno de resposta
    return dados
  },
  finalisada(request, response) {
    // pegar os dados do request body
    const data = request.body
    var tarefa_pai = data.fields.issuelinks[0].outwardIssue.key
    var xhr = new XMLHttpRequest()
    var dados = {
      issue= [
        tarefa_pai,
      ]
    }
    xhr.open('POST', webHook.em_analise)
    request.setRequestHeader('Content-Type', 'application/json')
    xhr.send(dados)
    //Retorno de resposta
    return dados
  },
}
