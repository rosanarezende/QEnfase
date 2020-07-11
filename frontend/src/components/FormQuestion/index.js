import React, { useState } from "react"

import { CreateButtonWrapper, FormText, ButtonsFormWrapper, ButtonCancel, InputWrapper } from "./styles"
import { Button, MenuItem } from "@material-ui/core"

function FormQuestion() {
    const [formAppears, setFormAppears] = useState(false)
    const [formInfo, setFormInfo] = useState({})

    const createQuestion = [
        { name: "ask", label: "Enunciado", required: true },
        { name: "a1", label: "Alternativa 01", required: true },
        { name: "a2", label: "Alternativa 02", required: true },
        { name: "a3", label: "Alternativa 03" },
        { name: "a4", label: "Alternativa 04" },
        { name: "a5", label: "Alternativa 05" }
    ]

    const getFormInfo = (e) => {
        const { name, value } = e.target
        setFormInfo({ ...formInfo, [name]: value })
    }

    const sendUserInfo = (e) => {
        e.preventDefault()
        const { ask, a1, a2, a3, a4, a5, correct } = formInfo
        const alternatives = [{ num: 1, text: a1 }, { num: 2, text: a2 }]
        a3 && alternatives.push({ num: 3, text: a3 })
        a4 && alternatives.push({ num: 4, text: a4 })
        a5 && alternatives.push({ num: 5, text: a5 })
        // id vai ser aqui ou no back?
        const info = { ask, alternatives, correct }
        const findNum = alternatives.find(alternative => alternative.alternativeNum === correct)
        if(!findNum){
            alert("Escolha uma 'alternativa correta' válida!")
            return
        }
        
        console.log(info)
        // setFormInfo({})
        // setFormAppears(false)
    }

    return (
        formAppears
            
            ?
            <form onSubmit={sendUserInfo}>
                <FormText>
                    Escreva a questão abaixo (com 2 a 5 alternativas):
                </FormText>

                {createQuestion.map(field => (
                    <InputWrapper
                        variant="outlined"
                        margin="normal"
                        type="text"
                        key={field.name}
                        name={field.name}
                        label={field.label}
                        value={formInfo[field.name] || ""}
                        onChange={getFormInfo}
                        required={field.required}
                    />
                ))}

                <FormText>
                    Qual a alternativa correta?
                </FormText>

                <InputWrapper
                    select
                    required
                    key="correct"
                    variant="outlined"
                    margin="normal"
                    label="Selecione um número válido"
                    name="correct"
                    onChange={getFormInfo}
                    value={formInfo.correct || ""}
                >
                    {[1,2,3,4,5].map(item => <MenuItem value={item} key={item}>{item}</MenuItem>)}
                </InputWrapper>

                <ButtonsFormWrapper>
                    <ButtonCancel onClick={() => setFormAppears(false)} variant="outlined" color="secondary">
                        Cancelar
                    </ButtonCancel>
                    <Button type="submit" variant="contained" color="secondary">
                        Criar Questão
                    </Button>
                </ButtonsFormWrapper>
            </form>
            
            :
            <CreateButtonWrapper>
                <Button onClick={() => setFormAppears(true)} variant="contained" color="secondary">
                    Nova Questão
                </Button>
            </CreateButtonWrapper>

    )
}

export default FormQuestion