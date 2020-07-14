import React, { useState, useEffect } from "react"
import { api } from "../../utils/constants"

import FormQuestion from "../FormQuestion"
import Question from "../Question"

import { Wrapper, QuestionsWrapper } from "./styles"
import { Typography } from "@material-ui/core"

function Content() {
    const [questions, setQuestions] = useState([])
    
    const getQuestions = () => {
        const requestBody = {
            query: `
            {
                questions{
                  id
                  ask
                  correct
                  alternatives {
                    id
                    num
                    text
                  }
                }
            }
            `
        }
        api.post("/api", requestBody)
            .then(res => setQuestions(res.data.data.questions))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getQuestions()
    }, [])

    return (
        <Wrapper elevation={3}>
            <FormQuestion getQuestions={getQuestions}/>

            <Typography variant="h2" color="primary" align="center" 
                style={{ fontSize: "2.5em", fontWeight: "bold", marginBottom: "1vh" }} 
            >
                Lista de questões
            </Typography>

            <QuestionsWrapper>
                {questions?.length === 0
                    ?
                    <Typography>
                        Ainda não há questões cadastradas.
                    </Typography>
                    :
                    <>
                        <Typography style={{ marginBottom: "2vh" }}>
                            Abaixo, você pode editar e/ou deletar as questões cadastradas.
                        </Typography>
                        {questions?.map(question => 
                            <Question key={question?.id} question={question} getQuestions={getQuestions}/>)}
                    </>
                }
            </QuestionsWrapper>
        </Wrapper>
    )
}

export default Content