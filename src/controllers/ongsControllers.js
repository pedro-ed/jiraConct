
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

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    })
    //Retorno de resposta
    return response.json({ id })
  },
}