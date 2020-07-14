import React from "react"

import FormQuestion from "../FormQuestion"

import { Wrapper, QuestionsWrapper, Question, QuestionTop, Alternative } from "./styles"
import { Typography, Radio } from "@material-ui/core"
import { Delete, Edit } from "@material-ui/icons"

function Content() {

    const questions = [
        {
            id: "aaaa",
            ask: "Qual a questão certa?",
            alternatives: [
                { id: 1, num: 1, text: "Alternativa 1" },
                { id: 2, num: 2, text: "Alternativa 2" },
                { id: 3, num: 3, text: "Alternativa 3" },
            ],
            correct: 2
        },
        {
            id: "bbbbbb",
            ask: "Qual a questão certa 2?",
            alternatives: [
                { id: 4, num: 1, text: "Alternativa 1" },
                { id: 5, num: 2, text: "Alternativa 2" }
            ],
            correct: 1
        }
    ]

    const onClickEditAsk = (question) => {
        const input = {
            id: question.id,
            ask: question.ask
        }
        console.log(input)
    }

    const onClickDelete = (id) => {
        const input = { id }
        console.log(input)
    }

    const onClickEditAlternative = (alternative, questionId) => {
        const input = {
            id: alternative.id,
            text: alternative.text,
            question_id: questionId
        }
        console.log(input)
    }

    const handleChange = (event) => {
        const { id, num } = JSON.parse(event.target.value)
        const input = { id, correct: num }
        console.log(input)
    };

    return (
        <Wrapper elevation={3}>
            <FormQuestion />

            <Typography variant="h2" color="primary" align="center" style={{ fontSize: "2.5em", fontWeight: "bold", marginBottom: "1vh" }} >
                Lista de questões
            </Typography>


            <QuestionsWrapper>
                {questions.length === 0
                    ?
                    <Typography>
                        Ainda não há questões cadastradas.
                    </Typography>
                    :
                    <>
                        <Typography style={{marginBottom: "2vh"}}>
                            Abaixo, você pode editar e/ou deletar as questões cadastradas.
                        </Typography>
                        {questions.map(question => {
                            return (<Question key={question.id}>
                                <QuestionTop>
                                    <Typography variant="h6">{question.ask}</Typography>
                                    <div>
                                        <Edit
                                            color="primary"
                                            onClick={() => onClickEditAsk(question)}
                                            style={{ cursor: "pointer" }} />
                                        <Delete
                                            color="primary"
                                            onClick={() => onClickDelete(question.id)}
                                            style={{ cursor: "pointer", margin: "0 1vw" }} />
                                    </div>
                                </QuestionTop>

                                {question.alternatives.map(alternative => {
                                    const content = <>
                                        <div>
                                            <Radio
                                                checked={alternative.num === question.correct}
                                                onChange={handleChange}
                                                value={JSON.stringify(alternative)}
                                                name="radio-button-demo"
                                                inputProps={{ 'aria-label': alternative.text }}
                                            />
                                            {alternative.text}
                                        </div>
                                        <div>
                                            <Edit
                                                onClick={() => onClickEditAlternative(alternative, question.id)}
                                                color="primary"
                                                style={{ cursor: "pointer" }} />
                                        </div>
                                    </>
                                    return alternative.num === question.correct
                                        ? <Alternative key={alternative.id} cor="#ff4a74" weight="bolder">{content}</Alternative>
                                        : <Alternative key={alternative.id}>{content}</Alternative>
                                })}
                            </Question>)
                        })}
                    </>
                }
            </QuestionsWrapper>
        </Wrapper>
    )
}

export default Content