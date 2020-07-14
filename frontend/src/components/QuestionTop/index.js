import React, { useState } from "react"
import { api } from "../../utils/constants"

import { QuestionTopWrapper, IconsWrapper } from "./styles"
import { Typography, TextField, Button } from "@material-ui/core"
import { Delete, Edit } from "@material-ui/icons"

function QuestionTop(props) {
    const { question, getQuestions } = props
    
    const [askAppears, setAskAppears] = useState(false)
    const [askClicked, setAskClicked] = useState(0)
    const [askText, setAskText] = useState('')

    const onClickEditAsk = (question) => {
        setAskClicked(question.id)
        setAskText(question.ask)
        setAskAppears(true)
    }

    const onEditAsk = (id) => {
        const requestBody = {
            query: `
            mutation {
                updateQuestionAsk(input: {
                  id: ${id}
                  ask: "${askText}"
                }){ ask }
              }
            `
        }
        api.post("/api", requestBody)
            .then(res => {
                console.log(res.data.data.updateQuestionAsk.ask)
                getQuestions()
            })
            .catch(err => console.log(err))
        setAskAppears(false)
    }

    const onClickDelete = (id) => {
        if (window.confirm("Tem certeza que deseja deletar essa questão?")) {
            const requestBody = {
                query: `
                mutation{
                    deleteQuestion(input: {
                      id: ${id}
                    } ){ id }
                  }
                `
            }
            api.post("/api", requestBody)
                .then(res => {
                    console.log(res.data.data.deleteQuestion.id)
                    getQuestions()
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <QuestionTopWrapper>
            {(askAppears && askClicked === question?.id)
                ? <div style={{ display: "flex", width: "80%", justifyContent: "space-between" }}>
                    <TextField
                        key={question?.id}
                        fullWidth
                        label="Nova pergunta"
                        placeholder={question?.ask}
                        value={askText}
                        onChange={(e) => setAskText(e.target.value)}
                        type="text"
                        required
                        InputLabelProps={{ shrink: true }}
                    />
                    <Button onClick={() => onEditAsk(question?.id)}>Editar</Button>
                </div>
                : <Typography variant="h6">{question?.ask}</Typography>}
            <IconsWrapper>
                <Edit
                    color="primary"
                    onClick={() => onClickEditAsk(question)}
                    style={{ cursor: "pointer" }} />
                <Delete
                    color="primary"
                    onClick={() => onClickDelete(question?.id)}
                    style={{ cursor: "pointer", margin: "0 1vw" }} />
            </IconsWrapper>
        </QuestionTopWrapper>
    )
}

export default QuestionTop
