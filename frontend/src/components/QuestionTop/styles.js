import styled from "styled-components"

export const QuestionTopWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1vh 1vw;
    background-color: #ff4a74;
    color: #ffff;
`

export const IconsWrapper = styled.div`
    display: flex;
    @media screen and (max-device-width: 1200px){
        flex-direction: column-reverse;
    }
`
