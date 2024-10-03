import { Router } from "express"

const candidatosRoutes = Router()

let candidatos = [
    {
        id: Math.floor(Math.random() * 1000000),
        nome: "Capitao Valverde",
        partido: "Juventude",
        idade: 17,
        segundo: true, //Concorrente ao segundo mandato
        propostas: [
            "Juventude ser campeão de tudo",
            "Juventude no paulista",
            "Juventude federando"
        ]
    }

]

candidatosRoutes.get("/", (req, res) => {
    return res.status(200).send( candidatos )
})

candidatosRoutes.post("/", (req, res) => {
    const {
        nome,
        partido,
        idade,
        segundo,
        propostas
    } = req.body

    //validação dos campos nome e partido

    if (!nome || !partido) {
        return res.status(400).send({
            message: "O malandro, o campo não foi preeenchido corretamente fiot",
        })
    }
   //validação de idade
    if (idade < 18) {
        return res.status(400).send ({
            message: "fiot, vc é de menor, nao vai ta podendo"
        })
    }


const novoCandidato = {
    id: Math.floor(Math.random() * 1000000),
    nome,
    partido,
    idade,
    segundo,
    propostas
}

candidatos.push(novoCandidato)
 return res.status(201).json({
    message: "Candidato cadastrado",
    novoCandidato,
 })
})
export default candidatosRoutes