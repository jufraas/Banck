import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import colors from "../../../utils/colors";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import { useValidate } from "../../../Hooks/useValidate.jsx";
import InputPassaword from "../../../components/InputPassaword.jsx";
import axios from "axios"
const apiBaseUrl = "http://127.0.0.1:5173";

const Login = () => {
  // Aqui usaremos la parte de la implementacion de responsive de Mui
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));
  // Aqui pondre la parte de la constante de la navegacion
  const navigate = useNavigate();
  //  =================================
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleClickShowPassword = () => {
    return setShowPassword((show) => !show);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // Aqui tendre un hook donde estare defiendo cuando la password se muestre o no
  const [showPassaword, setShowPassword] = useState(false);
  // Aqui pondre el la constante asincrona donde se defina la informacion de al constante
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Aquí usaremos el hook `validate` para realizar la solicitud de inicio de sesión
      const { data } = await axios.post(`${apiBaseUrl}/Home`, form);

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Después de un inicio de sesión exitoso, puedes redirigir a otra página
      navigate("/Home");
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
      // Aquí puedes manejar errores específicos, mostrar mensajes de error, etc.
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    // Esto contendra la parte del login
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        marginTop: "65px",
        paddingX: "48px",
      }}
    >
      <Stack
        alignItems="center"
        sx={{
          width: "100%",
          maxWidth: { xs: "none", sm: "300px" },
          backgroundColor: "rgba(33, 33, 33, 0.75)",
          borderRadius: "10px",
          boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.25)",
          paddingX: { xs: "25px", sm: "120px" },
          paddingTop: "30px",
          paddingBottom: "60px",
        }}
        component="form"
        role="form"
        onSubmit={handleSubmit}
      >
        {/* Aqui habra un operador continueo, donde impleque que al momento de encoger la pantalla habra un cambio*/}
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{
            marginTop: 2.5,
            marginBottom: "20px",
          }}
          display="flex"
          alignItems="baseline"
          justifyContent="center"
          color={colors.white}
        >
          {!md ? (
            "Login"
          ) : (
            <>
              <Typography
                variant="h7"
                color={colors.white}
                fontSize="Inter"
                fontWeight={700}
                marginLeft={1}
                marginRight={0.2}
              >
                Inicia sesion
              </Typography>
            </>
          )}
        </Typography>
        <FormControl fullWidth>
          <FormLabel
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 400,
              color: "white",
            }}
          >
            Email
          </FormLabel>
          <TextField
            id="email"
            type="email"
            placeholder="ejemplo@gmail.com"
            name="email"
            onChange={handleChange}
            value={form.email}
            sx={{ marginTop: "8px", marginBottom: "18px" }}
          />
        </FormControl>
        <FormControl fullWidth>
          <FormLabel
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 400,
              color: "white",
            }}
          >
            Password
          </FormLabel>
          <InputPassaword
            name="passaword"
            event={form}
            showPassword={showPassaword}
            handleClickShowPassword={handleClickShowPassword}
            handleMouseDownPassword={handleMouseDownPassword}
          />
        </FormControl>
        {/* El boton de login */}
        <Button fullWidth variant="contained" color="primary" type="submit">
          Ingresa ahora
        </Button>
      </Stack>
    </Stack>
  );
};

export default Login;
