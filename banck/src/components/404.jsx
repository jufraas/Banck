import { Stack, Typography } from "@mui/material";
import React from "react";
import colors from "../utils/colors";

const ErrorFound = () => {
  return (
    <Stack>
      <Typography
        display="flex"
        justifyContent="center"
        width="100%"
        marginY="20%"
        fontSize="30px"
        fontFamily="Inter"
        color={colors.text}
      >
        Hola, esta parte de la pagina o ruta no estan disponibles
      </Typography>
    </Stack>
  );
};

export default ErrorFound;
