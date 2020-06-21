const express = require('express')
const routes = express.Router()
// rotas
const jira = require("./controllers/jiraControllers")

routes.get('/',()=>{return {
    teste:"olá Mundo"
} })
routes.post('/a_fazer', jira.a_fazer)
routes.post('/fazendo', jira.fazendo)
routes.post('/pausa', jira.pausa)
routes.post('/impedimento', jira.impedimento)
routes.post('/concluido', jira.concluido)
routes.post('/finalisada', jira.finalisada)


module.exports = routes
