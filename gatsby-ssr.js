import React from "react"
import { createglobalStyle, ThemeProvider } from "styled-components"
import Theme from "./src/themes/theme"

const GlobalStyles = createglobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body, html {
    font-family: ${props => props.theme.fonts.main};
    height: 100%;

}
`

export const wrapRootElement = ({ element }) => (
<ThemeProvider theme = {Theme}>
   <GlobalStyles/>

    {element}
</ThemeProvider>
)

