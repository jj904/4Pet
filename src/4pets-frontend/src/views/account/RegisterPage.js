import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import {registerUser,} from "../../firebase";
import {useAuth} from '../../contexts/AuthContext'
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';
<<<<<<< HEAD
import axios from "axios"
import StickyHeader from "../../components/StickyHeader";
=======
>>>>>>> main

function RegisterPage() {
  const {user} = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate ();
  const [error, setError] = useState();
  const [open, setOpen] = useState(true);
  const [values, setValues] = useState({
    username: "",
    email: "",
    zipcode: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
  });

  useEffect(() => {
    document.title = "Register";  
    if (loading){
      return ;
    } 
  }, [user, loading,error,open, navigate]);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    if (!values.email || !values.password || !values.confirmPassword){
        setOpen(true)
        return setError('Please Fill out all require info')
    } 
    if (values.password !== values.confirmPassword){
      setOpen(true)
      return setError('Passwords do not match')
    } 
    try {
        setError('')
        setOpen(false)
        setLoading (true)
        await registerUser( values.username,values.email, values.password, values.zipcode);
        navigate('/login')
      }
     catch {
      setError('Fail to creat account')
      setOpen(true)
      setLoading (false)
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
    <StickyHeader/>
    <Collapse in={open}>
      {error && <Alert severity="error"
       action={
        <IconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={() => {
            setOpen(false);
          }}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      }>
        {error}</Alert>}
        </Collapse>
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
              sx={{ mb: 1 }}
              id="zipcode"
              name="zipcode"
              type="zipcode"
              label="ZipCode"
              inputProps={{ maxLength: 5 ,  minLength: 5 }}
              required
              value={values.zipcode}
              onChange={handleChange("zipcode")}
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
              disable={loading}
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
