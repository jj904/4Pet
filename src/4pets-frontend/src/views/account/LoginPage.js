import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link,useNavigate  } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {signIn} from "../../firebase";
import {useAuth} from '../../contexts/AuthContext'
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';
import StickyHeader from "../../components/StickyHeader";
function LoginPage() {
  
  const navigate = useNavigate();
  const {user} = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [open, setOpen] = useState(true);
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

 useEffect(() => {
  document.title = "Login";  
    if (loading) {
      return;
    }
    if (user){
      navigate("/home")
      return;
    }
  }, [user, loading, navigate, error, open]);


 

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

 async function handleSubmit(event){
    event.preventDefault();
    try {
      setError('')
      setOpen(false)
      setLoading (true)
      await signIn(values.email, values.password)
      navigate('/home')
    }
   catch {
    setError('Invaild Username/Password')
    setOpen(true)
    setLoading (false)
   }
  };



  return (
    <div
      className="login_page"
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#ffa7a7",
        overflow: "hidden",
      }}
    >  
      <StickyHeader/>
      <Grid
    justifyContent="center"
    alignItems="center"
    display="flex"
    direction="column"
    sx={{ mt: 8 }}
  >
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
        </Grid>
      <div style={{ width: "400px", margin: "100px auto" }}>
        <Typography variant="h3" align="center" sx={{ mb: 1 }}>
          Welcome!
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            sx={{ width: "28ch", mb: 1,display: "flex",
            flexDirection: "column",
            alignItems: "center" }}
            variant="standard"
            component="form"
            noValidate
            onSubmit={handleSubmit}
          >
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
      
            <Button
              variant="contained"
              color="primary"
            
              sx={{ position: "relative",mb: 2  }}
              disable={values.loading}
              type="submit"
            >
              Login
            </Button>
            <small>
              <Link to="/forgetPassword" >Forget Password? </Link>
            </small>
            <br/>
            <small>
              Need an account? <Link to="/register">Register</Link>
            </small>
          </Box>
        </Grid>
      </div>
    </div>
  );
}

export default LoginPage;
