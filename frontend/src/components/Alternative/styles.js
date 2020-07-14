import styled from "styled-components"

export const AlternativeWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${props => props.cor};
    font-weight: ${props => props.weight};
    padding: 0.5vh 2vw 0;
`