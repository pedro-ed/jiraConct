
module.exports = {
  async index(request, response) {
    var ongs={
      return:"nada"
    }
    return response.json(ongs)
  },

  async create(request, response) {
    // pegar os dados do request body
    const { name, email, whatsapp, city, uf } = request.body
    const id = crypto.randomBytes(4).toString('HEX')

    var xhr = new XMLHttpRequest();
    var dados = {
      teste:"isso mesmo"
    }
    var url = ""
    xhr.open("POST",url);
    request.setRequestHeader('Content-Type', 'application/json');
    xhr.addEventListener("load", function() {
    var erroAjax = document.querySelector("#erro-ajax");

    if (xhr.status == 200) {
        
    } else {
    
    }
});

xhr.send(dados);
    
    //Retorno de resposta
    return response.json({ id })
  },
}
