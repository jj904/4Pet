import { autocompleteClasses, CssBaseline } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import AppDescription from "../../components/AppDescription";
import Header from "../../components/Header";
import StickyHeader from "../../components/StickyHeader";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "auto",
        minHeight: "100vh",
        backgroundImage: `url("https://wallpaperaccess.com/full/390954.jpg")`,
        backgroundRepeat:'no-repeat',
        backgroundSize: 'cover',
    },
    body: {
        backgroundColor: 'white',
    }
    
}));

function About(){
    const classes = useStyles();

    return (
        <div>
            <StickyHeader/>
            <div className={classes.body}>
                Contact Page
            </div>
        </div>
    );
}

export default About;