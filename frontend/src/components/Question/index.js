import React from "react"

import QuestionTop from "../QuestionTop"
import Alternative from "../Alternative"

import { QuestionWrapper } from "./styles"

function Question(props) {
    const { question, getQuestions } = props

    return (<QuestionWrapper key={question?.id}>
        <QuestionTop
            question={question}
            getQuestions={getQuestions}
        />
        {question?.alternatives?.map(alternative =>
            <Alternative
                alternative={alternative}
                question={question}
                getQuestions={getQuestions}
            />)}
    </QuestionWrapper>)
}

export default Question
