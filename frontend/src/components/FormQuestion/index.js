import React, { useState } from "react"

import { CreateButtonWrapper, FormText, ButtonsFormWrapper, ButtonCancel, InputWrapper } from "./styles"
import { Button, MenuItem } from "@material-ui/core"

function FormQuestion() {
    const [formAppears, setFormAppears] = useState(false)
    const [formInfo, setFormInfo] = useState({})

    const createQuestion = [
        { name: "enunciado", label: "Enunciado", required: true },
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
        // dar um jeito de verificar se o numero escolhido é uma das alternativas
        console.log(formInfo)

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
                    {[
                        { num: 1, value: "a1"}, 
                        { num: 2, value: "a2"},
                        { num: 3, value: "a3"},
                        { num: 4, value: "a4"},
                        { num: 5, value: "a5"}
                    ].map(item => 
                        <MenuItem value={item.value} key={item.num}>
                            {item.num}
                        </MenuItem>)}
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