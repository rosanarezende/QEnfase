import styled from "styled-components"
import { Paper } from "@material-ui/core"

export const Wrapper = styled(Paper)`
    min-height: 82vh;
    width: 92vw;
    padding: 1vh 5em 5vh;
    margin: 13vh auto 5vh;
    background-color: #ffff;
    @media screen and (max-device-width: 1200px){
        padding: 1vh 2em 5vh;
    }
`

export const QuestionsWrapper = styled.div`
    margin: 3vh 0;
`

export const Question = styled.div`
    margin-bottom: 3vh;
    position: relative;
`

export const QuestionTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1vh 1vw;
    background-color: #ff4a74;
    color: #ffff;
    
`

export const Alternative = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${props => props.cor};
    font-weight: ${props => props.weight};
    padding: 0.5vh 2vw 0;
`
