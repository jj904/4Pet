import React, { useState, useEffect} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link,useNavigate } from "react-router-dom";
import { signOutUser } from "../firebase";
import {useAuth} from '../contexts/AuthContext'


const pages = ['Chat',];
const settings = ['Profile', 'Logout'];

const NavBar = () => {
  const navigate = useNavigate();
  const {user} = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (loading) {
      return;
    }
    if (!user) {
      navigate("/login");
      return;
    } 
  }, [user, loading, navigate, error, open]);

  return (
    
    <AppBar position="static">
       <Container maxWidth="xl">
      <Toolbar disableGutters >
        <Typography 
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                      mr: 2,
                      display: { xs: 'none', md: 'flex' },
                      fontFamily: 'monospace',
                      fontWeight: 700,
                      color: 'inherit',
                      textDecoration: 'none',
                    }}>
          4Pets
        </Typography>
        <MenuItem >
           <Link to="/chat"  color="inherit" >Chat </Link>
        </MenuItem>
        <Box sx={{ flexGrow: 0 }}>
        <Button
              variant="contained"
              color="primary"
              sx={{ position: "relative" }}
              type="logout"
              onClick={signOutUser}
            >
              Logout
        </Button>
        </Box>
      </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;