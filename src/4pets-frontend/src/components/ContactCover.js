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
        width: "100%",
        height: "auto",
        backgroundImage: `url("https://images.unsplash.com/photo-1529257414772-1960b7bea4eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")`,
        backgroundRepeat:'no-repeat',
        backgroundSize: 'cover',
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
        textAlign: "center"
    },
    container: {
        width: '80%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        height: '60vh',
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

export default function AboutCover(){
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
                    Meet the <br />
                    <span className={classes.colorText}> app creators </span>
                </h1>
            </div>
        </Collapse>
        
    </div>
    );
}