import { Router } from "express"

const candidatosRoutes = Router()

let candidatos = [
    {
        id: Math.random() * 1000000,
        nome: "Capitao Valverde",
        partido: "Juventude",
        idade: 17,
        segundo: true, //Concorrente ao segundo mandato
        propostas: [
            "Juventude ser campeão de tudo",
            "Juventude no paulista",
            "Juventude federando"
        ]
    },

]

candidatosRoutes.get("/", (req, res) => {
    return res.status(200).send( candidatos )
})

candidatosRoutes.post("/", (req, res) => {
    const {nome, cor} = req.body
    const novaEmocao = {
        id: candidatos.length + 1,
        nome: nome,
        cor: cor
    }
    candidatos.push(novaEmocao)
    return res.status(201).send( candidatos )
})

candidatosRoutes.get("/:id", (req, res) => {
    const {id} = req.params
    //console.log(id)
    const emocao = candidatos.find((emotion) => emotion.id == id )

    if (!emocao) {
        return res.status(200).send ({
            message: "Emoção não encontrada!", 
        })}
        return res.status(200).send({
            message: "emocao encontrada",
            emocao, 
        })
    })

    candidatosRoutes.put("/:id", (req, res) => {
        const {id} = req.params

        const emocao = candidatos.find((emotion) => emotion.id == id )

        if (!emocao) {
            return res.status(200).send ({
                message: "Emoção não encontrada!", 
            })}
            return res.status(200).send({
                message: "emocao encontrada",
                emocao, 
            })
            const {nome, cor} = req.body
            emocao.nome = nome
            emocao.cor = cor

            return res.status(200).send({
                message: "Emocao atualizada!",
                emocao,
        })

})

candidatosRoutes.delete("/:id", (req, res) => {
    const {id} = req.params

    const emocao = candidatos.find((emotion) => emotion.id == id )

    if (!emocao) {
        return res.status(200).send ({
            message: "Emoção não encontrada!", 
        })}

        candidatos = candidatos.filter((emotion) => emotion.id != id)
        return res.status(200).send({
            message: "emocao deletada",
            emocao, 
        })
})

export default candidatosRoutes