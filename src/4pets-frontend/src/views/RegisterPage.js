import React from "react";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Card from "@mui/material/Card";
import KeyIcon from "@mui/icons-material/Key";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import logo from "../assets/4pets_brand.png";

function RegisterPage() {
  const [values, setValues] = React.useState({
    username: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
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
      classname="signup_page"
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#ffa7a7",
        overflow: "hidden",
      }}
    >
      <div style={{ width: "400px", margin: "200px auto" }}>
        <Card justifyContent="center" alignItems="center">
          <Grid container spacing={2}>
            <Grid item xs={6} md={4}>
              <div className="logo"
              style={{
                  padding: "10px 0",
                }}>
                <img src={logo} width="100" height="80" alt="logo" />
              </div>
            </Grid>
            <Grid item xs={6} md={4}>
              <div
                style={{
                  color: "#ffa7a7",
                  fontSize: "30px",
                  textAlign: "center",
                  padding: "30px 0",
                }}
              >
                SignUp
              </div>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ mb: 1 }}
          >
            <FormControl sx={{ width: "28ch", mb: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-username" color="primary">
                Username/Email
              </InputLabel>
              <Input
                id="standard-adornment-username"
                value={values.username}
                onChange={handleChange("username")}
              />
            </FormControl>

            <FormControl sx={{ mb: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password" color="primary">
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
            <FormControl sx={{ mb: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password" color="primary">
                Confirm Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.confirmPassword}
                onChange={handleChange("confirmPassword")}
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
        </Card>

        <Stack
          spacing={5}
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 2 }}
        >
          <Button variant="contained" color="primary">
            Already have an account?
          </Button>
          <Button variant="contained" color="primary">
            SignUp
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default RegisterPage;
