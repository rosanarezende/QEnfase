import React from "react"

import FormQuestion from "../FormQuestion"

import { Wrapper, QuestionsWrapper, Question, LiColor } from "./styles"
import { Typography } from "@material-ui/core"

function Content() {

    const questions = [
        {
            id: "aaaa",
            enunciado: "Qual a questão certa?",
            alternatives: [
                { alternativeNum: 1, alternativeText: "Alternativa 1" },
                { alternativeNum: 2, alternativeText: "Alternativa 2" },
                { alternativeNum: 3, alternativeText: "Alternativa 3" },
            ],
            correct: 2
        },
        {
            id: "bbbbbb",
            enunciado: "Qual a questão certa 2?",
            alternatives: [
                { alternativeNum: 1, alternativeText: "Alternativa 1" },
                { alternativeNum: 2, alternativeText: "Alternativa 2" }
            ],
            correct: 1
        }
    ]

    return (
        <Wrapper elevation={3}>
            <FormQuestion />

            <Typography variant="h2" style={{ fontSize: "2.5em", fontWeight: "bold" }} align="center" color="primary">
                Lista de questões
            </Typography>

            <QuestionsWrapper>
                {questions.length === 0
                    ?
                    <Typography>
                        Ainda não há questões criadas.
                    </Typography>
                    :
                    <>
                        {questions.map(question => {
                            return (
                                <Question key={question.id}>
                                    <Typography variant="h6" style={{backgroundColor: "#ff4a74", color: "#ffff", paddingLeft: "1vw"}}>
                                        {question.enunciado}
                                    </Typography>
                                    <ul>
                                        {question.alternatives.map(item => (
                                            item.alternativeNum === question.correct
                                                ? <LiColor>{item.alternativeText}</LiColor>
                                                : <li>{item.alternativeText}</li>
                                        ))}
                                    </ul>
                                </Question>
                            )
                        })}
                    </>
                }
            </QuestionsWrapper>
        </Wrapper>
    )
}

export default Content