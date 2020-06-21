var webHook = {
  em_analise:"",
  a_fazer:"https://automation.atlassian.com/pro/hooks/78314d220e9f52943610baa07d320a52cbc29f06",
  fazendo:"https://automation.atlassian.com/pro/hooks/ba06c47da17d15e010fdd5c08dcd75d1ca6337a6",
  pausa:"https://automation.atlassian.com/pro/hooks/8abf97edda34f46842198cdaecb2292f9e1b7b10",
  impedimento:"https://automation.atlassian.com/pro/hooks/8abf97edda34f46842198cdaecb2292f9e1b7b10",
  concluido:"https://automation.atlassian.com/pro/hooks/ee08f9f1ef8f8626b51701f1c5cd1a9403db4036",
  finalisada:""
}
module.exports = {
 
  
  a_fazer(request, response) {
    // pegar os dados do request body
    const data = request.body
    var tarefa_pai = data.fields.issuelinks[0].outwardIssue.key
    var xhr = new XMLHttpRequest()
    var dados = {
      issue: [
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
      issue: [
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
      issue: [
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
      issue: [
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
      issue: [
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
      issue: [
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
