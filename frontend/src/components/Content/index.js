import React from "react"

import FormQuestion from "../FormQuestion"

import { Wrapper, QuestionsWrapper, Question, LiColor } from "./styles"
import { Typography } from "@material-ui/core"

function Content() {

    const questions = [
        {
            id: "aaaa",
            ask: "Qual a questão certa?",
            alternatives: [
                { num: 1, text: "Alternativa 1" },
                { num: 2, text: "Alternativa 2" },
                { num: 3, text: "Alternativa 3" },
            ],
            correct: 2
        },
        {
            id: "bbbbbb",
            ask: "Qual a questão certa 2?",
            alternatives: [
                { num: 1, text: "Alternativa 1" },
                { num: 2, text: "Alternativa 2" }
            ],
            correct: 1
        }
    ]

    return (
        <Wrapper elevation={3}>
            <FormQuestion />

            <Typography variant="h2" color="primary" align="center" style={{ fontSize: "2.5em", fontWeight: "bold" }} >
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
                                    <Typography variant="h6" style={{ backgroundColor: "#ff4a74", color: "#ffff", paddingLeft: "1vw" }}>
                                        {question.ask}
                                    </Typography>
                                    <ul>
                                        {question.alternatives.map(alternative => (
                                            alternative.num === question.correct
                                                ? <LiColor>{alternative.text}</LiColor>
                                                : <li>{alternative.text}</li>
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