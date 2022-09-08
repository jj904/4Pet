import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import {
  auth,
  registerUser,
  resetPassword,
  signOutUser,
} from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function RegisterPage() {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
  });
  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) {
      alert("welcome!");
      navigate("/");
    }
    if (error) {
      return (
        <div>
          <p>Error: {error.message}</p>
        </div>
      );
    }
  }, [user, loading, navigate, error]);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      if (!values.username || !values.email || !values.password || !values.confirmPassword){
        alert("Please enter all require info");
        
      } 
      else{
        registerUser(values.username, values.email, values.password);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div
      className="register_page"
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#ffa7a7",
        overflow: "hidden",
      }}
    >
      <div style={{ width: "400px", margin: "200px auto" }}>
        <Typography variant="h3" align="center" sx={{ mb: 1 }}>
          Register
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            sx={{
              width: "28ch",
              mb: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            variant="standard"
            component="form"
            noValidate
            onSubmit={handleSubmit}
          >
            <TextField
              sx={{ mb: 1 }}
              id="username"
              name="username"
              type="text"
              label="Username"
              required
              value={values.username}
              onChange={handleChange("username")}
            />

            <TextField
              sx={{ mb: 1 }}
              id="email"
              name="email"
              type="email"
              label="Email"
              required
              value={values.email}
              onChange={handleChange("email")}
            />

            <TextField
              sx={{ mb: 2 }}
              id="password"
              name="password"
              label="Password"
              required
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
            />
            <TextField
              sx={{ mb: 2 }}
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              required
              type={values.showConfirmPassword ? "text" : "password"}
              value={values.confirmPassword}
              onChange={handleChange("confirmPassword")}
            />

            <Button
              variant="contained"
              color="primary"
              sx={{ position: "relative", mb: 2 }}
              disable={values.loading}
              type="submit"
            >
              Register
              {values.loading && (
                <CircularProgress sx={{ position: "absolute" }} />
              )}
            </Button>
            <small>
              Already have an account? <Link to="/Login">Login</Link>
            </small>
          </Box>
        </Grid>
      </div>
    </div>
  );
}

export default RegisterPage;
