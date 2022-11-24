import { autocompleteClasses, CssBaseline } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AppDescription from "../../components/AppDescription";
import Header from "../../components/Header";
import StickyHeader from "../../components/StickyHeader";
import React, { useEffect } from "react";

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

export default function Contact(){
    const classes = useStyles();
    useEffect(() => {
        document.title = "Contact";
    })
    return (
        <div >
            <StickyHeader/>
            <div className={classes.body}>
            </div>
        </div>
    );
}
