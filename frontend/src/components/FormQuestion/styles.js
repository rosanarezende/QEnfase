import styled from "styled-components"
import { Button, TextField, Typography } from "@material-ui/core"

export const CreateButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 2vh 0;
`

export const FormText = styled(Typography)`
    margin: 3vh 0 2vh;
`

export const ButtonsFormWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 4vh 0 4vh;
    @media screen and (max-device-width: 1200px){
        justify-content: center;
    }
`

export const ButtonCancel = styled(Button)`
    margin-right: 1vw;
    @media screen and (max-device-width: 1200px){
        margin-right: 2vw;
    }
`

export const InputWrapper = styled(TextField)`
    width: 100%;
    margin: 1vh auto;

`