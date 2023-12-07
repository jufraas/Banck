import { Button, Container, Stack, TextField, Typography, useMediaQuery } from "@mui/material"
import colors from "../../../utils/colors"
import { useTheme } from "@emotion/react";


const Login = () => {
    const theme = useTheme();
    const md = useMediaQuery(theme.breakpoints.up("md"));
    return (
        <h1>hola</h1>
    )
}

export default Login