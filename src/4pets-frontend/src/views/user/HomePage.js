import React, { useState,useEffect } from "react";
import {signOutUser } from "../../firebase";
import Button from "@mui/material/Button";
import {useAuth} from '../../contexts/AuthContext'
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";


function HomePage() {
  const navigate = useNavigate();
  const {user} = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [open, setOpen] = useState(true);
  const [values, setValues] = useState({
    email: "",
  });

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user){
      navigate("/")
      return;
    }
    if (!user) {
      navigate("/login");
      return;
    } 
  }, [user, loading, navigate, error, open]);

  return (
    <div>
      
      <NavBar></NavBar>
      HomePage
        <Button
              variant="contained"
              color="primary"
              sx={{ position: "relative",mb: 2  }}
              type="logout"
              onClick={signOutUser}
            >
              Logout
        </Button>
    </div>
  )
}

export default HomePage