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
