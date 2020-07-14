import React, { useState } from "react"
import { api } from "../../utils/constants"

import { AlternativeWrapper } from "./styles"
import { Radio, TextField, Button } from "@material-ui/core"
import { Edit } from "@material-ui/icons"

function Alternative(props) {
    const { alternative, question, getQuestions } = props

    const [alternativeAppears, setAlternativeAppears] = useState(false)
    const [alternativeClicked, setAlternativeClicked] = useState(0)
    const [alternativeText, setAlternativeText] = useState('')

    const onClickEditAlternative = (alternative) => {
        setAlternativeClicked(alternative.id)
        setAlternativeText(alternative.text)
        setAlternativeAppears(true)
    }

    const onEditAlternative = (alternativeId, questionId) => {
        const requestBody = {
            query: `
            mutation {
                updateAlternativeText(input: {
                  id: ${alternativeId}
                  text: "${alternativeText}"
                  question_id: ${questionId}
                }){ text }
              }
            `
        }
        api.post("/api", requestBody)
            .then(res => {
                console.log(res.data.data.updateAlternativeText.text)
                getQuestions()
            })
            .catch(err => console.log(err))
        setAlternativeAppears(false)
    }

    const handleChange = (event) => {
        const { id, correct } = JSON.parse(event.target.value)
        const requestBody = {
            query: `
            mutation {
                updateQuestionCorrect(input: {
                  id: ${id}
                  correct: ${correct}
                } ){ correct }
              }
            `
        }
        api.post("/api", requestBody)
            .then(res => {
                console.log(res.data.data.updateQuestionCorrect.correct)
                getQuestions()
            })
            .catch(err => console.log(err))
    }

    const content = <>
        {(alternativeAppears && alternativeClicked === alternative?.id)
            ? <div style={{ display: "flex", width: "80%", justifyContent: "space-between" }}>
                <TextField
                    key={alternative?.id}
                    fullWidth
                    label="Nova alternativa"
                    placeholder={alternative?.text}
                    value={alternativeText}
                    onChange={(e) => setAlternativeText(e.target.value)}
                    type="text"
                    required
                    InputLabelProps={{ shrink: true }}
                />
                <Button onClick={() => onEditAlternative(alternative?.id, question?.id)}>Editar</Button>
            </div>
            : <div>
                <Radio
                    checked={alternative?.num === question?.correct}
                    onChange={handleChange}
                    value={JSON.stringify({ correct: alternative?.num, id: question?.id })}
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': alternative?.text }}
                />
                {alternative?.text}
            </div>
        }
        <Edit
            onClick={() => onClickEditAlternative(alternative)}
            color="primary"
            style={{ cursor: "pointer" }} />
    </>

    return alternative?.num === question?.correct
        ? <AlternativeWrapper key={alternative?.id} cor="#ff4a74" weight="bolder">
            {content}
        </AlternativeWrapper>
        : <AlternativeWrapper key={alternative?.id}>
            {content}
        </AlternativeWrapper>
}

export default Alternative
