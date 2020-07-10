import React from "react"

import { AppBarStyled, Logo } from "./styles"
import { Toolbar } from "@material-ui/core"

function Appbar() {

    return (
        <AppBarStyled color="primary">
            <Toolbar>
                <Logo
                    src="https://user-images.githubusercontent.com/45580434/87096648-a9628b00-c219-11ea-8701-ce405fb41651.png"
                    alt="logo"
                />
            </Toolbar>
        </AppBarStyled>
    )
}

export default Appbar