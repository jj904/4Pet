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
        height: '90vh',
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
    title: {
        color: '#ffffff',
        fontSize: '3.5rem',
    },
    container: {
        textAlign: 'left'
    },
    colorText: {
        color: '#ffa7a7',
    }, 
    goDown: {
        color: '#ffa7a7',
        fontSize: '4em'
    },
    linkStyle: {
        textDecoration: 'none'
    }
}));

export default function Header(){
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);
    return (
    <div className={classes.root} >
        <Collapse 
        in={checked}
        {... (checked ? {timeout: 1000} : {})}
        collapsedHeight={50}
        >
            <div className={classes.container}>
                <h1 className={classes.title}> 
                    A social platform for <br />
                    <span className={classes.colorText}>pet owners</span>
                </h1>
                <div>
                <Link to="/register" className={classes.linkStyle}>
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
                }> Create Account 
                </Button>
                </Link>
                </div>
            </div>
        </Collapse>
        
    </div>
    );
}