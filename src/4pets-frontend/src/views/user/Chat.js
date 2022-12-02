import NavBar from "../../components/NavBar";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { CometChatUI } from "../../lib/cometchat-pro-react-ui-kit/CometChatWorkspace/src";
import Grid from "@mui/material/Grid";
function Chat() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Chat";
    if (loading) {
      return;
    }
    if (!user) {
      navigate("/");
      return;
    }
  }, [user, loading, navigate]);

  return (
    <div className="chat_page">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <NavBar />
        <CometChatUI />
      </Grid>
    </div>
  );
}

export default Chat;
