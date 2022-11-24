import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from "@mui/styles";
import { AppBar, Button, Collapse, Toolbar } from '@mui/material';
import { color, fontFamily, fontSize } from '@mui/system';

const useStyles = makeStyles((theme) => ({
    components: {
        background: 'none',
        backgroundColor: 'transparent',
    }, 
    root: {
        width: '80%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
    },
    appbar: {
        TODO: fontFamily
    },
    appBarTitle: {
        color: '#ffa7a7',
        background: 'white',
        padding: '3px',
        borderRadius: '8px',
    },
    toolbar: {
    },
    appTitle:{
        flexGrow:'1',
    },
    login :{
        alignText: 'right',
    },
    linkStyle: {
        textDecoration: 'none',
        color: 'white'
    },
    menu: {
        color: 'white'
    },
    title: {
        color: '#ffffff',
        fontSize: '3.5rem',
    }
}));

function changeBackground(e) {
    e.target.style.background = 'transparent';
    e.target.style.color = 'white';
  }

function returnBackground(e) {
e.target.style.background = 'white';
e.target.style.color = '#ffa7a7';
}

export default function StickyHeader(){
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);
    return (
    <div className={classes.root} >
        <AppBar className={classes.appbar} sx={{ 
            bgcolor: '#ffa7a7',
            boxShadow: "none",
            height: '8vh'
            }}>
            <Toolbar className={classes.toolbar}>
                <Link to="/" className={classes.linkStyle}> 
                <h1 className={classes.appTitle}>4<span className={classes.appBarTitle}>Pets</span></h1>
                </Link>
                <div className={classes.menu}>
                    <Link to="/about" className={classes.linkStyle}>
                    <Button sx={
                        {
                            color:'#ffffff',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            backgroundColor: '#ffa7a7',
                            borderRadius: '12px',
                            border: 'none',
                            padding: '12px 24px',
                            transition: "all 150ms ease",
                            cursor: "pointer",
                        }
                        }> About
                    </Button>
                    </Link>
                    <Link to="/contact" className={classes.linkStyle}>
                    <Button sx={
                        {
                            color:'#ffffff',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            backgroundColor: '#ffa7a7',
                            borderRadius: '12px',
                            border: 'none',
                            padding: '12px 24px',
                            transition: "all 150ms ease",
                            cursor: "pointer",
                        }
                        }> Contact Us
                    </Button>
                    </Link>
                </div>
                <div className={classes.login}>
                    <Link to="/login" className={classes.linkStyle}>
                    <Button onMouseEnter={changeBackground} onMouseLeave={returnBackground} sx={
                        {
                            color:'#ffa7a7',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            backgroundColor: '#fff',
                            borderRadius: '12px',
                            border: 'none',
                            padding: '6px 18px',
                            transition: "all 150ms ease",
                            cursor: "pointer",
                            alignContent: 'right',
                            display: "flex",
                            justifyContent: "flex-end"
                        }
                    }> Sign In 
                    </Button>
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    </div>
    );
}