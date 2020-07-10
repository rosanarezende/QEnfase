import React from "react"

import FormQuestion from "../FormQuestion"

import { Wrapper } from "./styles"
import { Typography } from "@material-ui/core"

function Content() {
    
    return (
        <Wrapper elevation={3}>
            <FormQuestion/>

            <Typography variant="h2" style={{ fontSize: "2.5em" }} align="center">
                Lista de questões
            </Typography>

            <div>
                questões
            </div>
            
        </Wrapper>
    )
}

export default Content