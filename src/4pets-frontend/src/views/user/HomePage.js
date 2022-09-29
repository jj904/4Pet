import React, { useState, useEffect } from "react";
import { auth, signOutUser } from "../../firebase";
import Button from "@mui/material/Button";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";



function HomePage() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading){
      return ;
    } 
    if (!user) {
      navigate("/login");
    } 
  }, [user, loading, navigate]);

  return (
    <div>
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