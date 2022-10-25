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

const NavBar = () => {
  const navigate = useNavigate();
  const {user} = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [anchorEl, setAnchorEl] = useState(null);
  const [userId, setUserId] = useState([]);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (loading) {
      return;
    }
    if (!user) {
      navigate("/login");
      return;
    } 
    const fetchData = async () =>{
      fetch(`http://localhost:8080/api/account/${user.uid}`).then(async (res) =>{
        const jsonResult = await res.json();
        setUserId(jsonResult);
      })
    }
    fetchData();
  }, [user, loading, navigate, error, open]);

  return (
    
    <AppBar position="static" sx={{background: '#ffa7a7'}}>
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
           <Link to="/chat" style={{color:"white" ,textDecoration:'none' }} >Chat </Link>
        </MenuItem>
        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        sx={{ color: 'white'}}
        onClick={handleClick}
      >
          {userId.username }
      </Button>  
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><Link to="/profile"  style={{color:"black" ,textDecoration:'none' }} >Profile </Link></MenuItem>
        <MenuItem onClick={signOutUser}>Logout</MenuItem>
      </Menu>
      </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;