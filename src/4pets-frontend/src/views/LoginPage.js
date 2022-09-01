import React from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import KeyIcon from "@mui/icons-material/Key";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function LoginPage() {
  const [values, setValues] = React.useState({
    username: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div
      classname="login_page"
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#ffa7a7",
        overflow: "hidden",
      }}
    >
      <div style={{ width: "400px", margin: "200px auto" }}>
        <div
          style={{
            color: "#ffffff",
            fontSize: "30px",
            textAlign: "center",
            padding: "30px 0",
          }}
        >
          Welcome!
        </div>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <FormControl sx={{ width: "28ch", mb: 1 }} variant="standard">
            <InputLabel
              htmlFor="standard-adornment-username"
              color="primary"
            >
              Username/Email
            </InputLabel>
            <Input
              id="standard-adornment-username"
              value={values.username}
              onChange={handleChange("username")}

            />
            
          </FormControl>

          <FormControl sx={{}} variant="standard">
            <InputLabel
              htmlFor="standard-adornment-password"
              color="primary"
            >
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>

        <Stack
          spacing={5}
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 2 }}
        >
          <Button variant="contained" color="primary">Register</Button>
          <Button variant="contained" color="primary">Login</Button>
        </Stack>
      </div>
    </div>
  );
}

export default LoginPage;
