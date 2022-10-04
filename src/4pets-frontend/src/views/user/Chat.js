import NavBar from '../../components/NavBar'
import React, {  useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import {useAuth} from '../../contexts/AuthContext'
import { CometChatUI } from "../../lib/cometchat-pro-react-ui-kit-3.0.10-1/CometChatWorkspace/src";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
function Chat() {
  const navigate = useNavigate();
  const {user} = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

 useEffect(() => {
    if (loading) {
      return;
    }
    if (!user){
      navigate("/login")
      return;
    }
  }, [user, loading, navigate, error]);

  return ( 
  <div >
    <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <NavBar/>
          <CometChatUI />
    </Grid>

   </div>
  )
}

export default Chat
