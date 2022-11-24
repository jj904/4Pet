import { autocompleteClasses, Grid,  } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import AboutCover from "../../components/AboutCover";
import AppDescription from "../../components/AppDescription";
import Header from "../../components/Header";
import StickyHeader from "../../components/StickyHeader";

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: 'white',
        height: "100vh"
    },
    colorText: {
        color: "#ffa7a7"
    }
    
}));

function About(){
    const classes = useStyles();

    return (
        <div>
            <StickyHeader/>
            <AboutCover/>
            <div className={classes.container}>
            <Grid container spacing={4}>
                    <Grid item xs={7}>
                    </Grid>
                    <Grid item xs={5} sx={{align:'center'}}>
                            <h1 className={classes.title}> 
                                The <span className={classes.colorText}> Idea </span>
                            </h1>
                            <p>
                              4Pets is designed for pet owners to meet fellow pet owners. Whether it be a dog, a cat, or a fish, 
                              as long as you own a pet, this application is for you.
                            </p>
                            <p>
                              Bond over your animal pals and share a new connection. 
                            </p>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default About;