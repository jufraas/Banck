import { IconButton, Stack, TextField } from "@mui/material";
import {  Visibility, VisibilityOff, VisibilityRounded} from "@mui/icons-material"
import colors from "../utils/colors";
import { useState } from "react";

const InputPassaword = ({
//    Es un boleano que indica si se muestra la passaword o no
  showPassword,
  handleClickShowPassword,
  handleMouseDownPassword,
  onChange,
  name,
  helper = "",
  error = false,
}) => {
    const [show, setShow] = useState(false);
  return (
    <Stack sx={{ position: "relative" }}>
      <TextField
        type={show ? "text" : "password"}
        placeholder="Passaword"
        name={name}
        helperText={helper}
        error={error}
        onChange={onChange}
        sx={{
          marginTop: "8px",
          marginBottom: "18px",
        }}
      />
      <IconButton
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
        sx={{
          margin: 0,
          padding: "2px",
          width: "fit-content",
          height: "fit-content",
          backgroundColor: colors.white,
          position: "absolute",
          top: "25%",
          right: "10px",
        }}
      >
        {!showPassword ? (
            <Visibility sx={{ width: "20px", height: "20px"}}/>
        ): (
            <VisibilityOff sx={{ width: "20px", height: "20px"}} />
        )}
      </IconButton>
    </Stack>
  );
};

export default InputPassaword;
