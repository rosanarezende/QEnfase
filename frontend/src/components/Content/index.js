import React from "react"

import FormQuestion from "../FormQuestion"

import { Wrapper, QuestionsWrapper, Question, LiColor } from "./styles"
import { Typography } from "@material-ui/core"

function Content() {

    const questions = [
        {
            id: "aaaa",
            enunciado: "Qual a questão certa?",
            a1: "Alternativa 1",
            a2: "Alternativa 2",
            a3: "Alternativa 3",
            correct: "a2"
        },
        {
            id: "bbbb",
            enunciado: "Qual a questão certa 2?",
            a1: "Alternativa 1",
            a2: "Alternativa 2",
            correct: "a1"
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
                                        {question.correct === "a1"
                                            ? <LiColor>{question.a1}</LiColor>
                                            : <li>{question.a1}</li>
                                        }
                                        {question.correct === "a2"
                                            ? <LiColor>{question.a2}</LiColor>
                                            : <li>{question.a2}</li>
                                        }
                                        {question.a3 &&
                                            (question.correct === "a3"
                                                ? <LiColor>{question.a3}</LiColor>
                                                : <li>{question.a3}</li>
                                            )}
                                        {question.a4 &&
                                            (question.correct === "a4"
                                                ? <LiColor>{question.a4}</LiColor>
                                                : <li>{question.a4}</li>
                                            )}
                                        {question.a5 &&
                                            (question.correct === "a5"
                                                ? <LiColor>{question.a5}</LiColor>
                                                : <li>{question.a5}</li>
                                            )}
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