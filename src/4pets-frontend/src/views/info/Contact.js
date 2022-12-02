import { autocompleteClasses, Grid, Button  } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from 'react-router-dom';
import StickyHeader from "../../components/StickyHeader";
import ContactCover from "../../components/ContactCover";
import React, { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '50px',
        width: '95%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'right',
        height: '30vh',
    },
    container: {
        backgroundColor: 'white',
        height: "100vh"
    },
    colorText: {
        color: "#ffa7a7"
    },
    creators: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    linkStyle: {
        textDecoration: 'none'
    }
    
}));

function Contact(){
    const classes = useStyles();
    useEffect(() => {
        document.title = "About";
    })
    return (
        <div>
            <StickyHeader/>
            <ContactCover/>
            <div className={classes.root}>
                <Grid container spacing={4}>
                        <Grid item xs={3} className={classes.creators}>
                            <h1> 
                                Alan <span className={classes.colorText}> Nguyen </span>
                            </h1>
                            <p> Software Engineer, Backend </p>
                            <Link className={classes.linkStyle}
                                to='#'
                                onClick={(e) => {
                                    window.location.href = "mailto:alan.nguyen01@sjsu.edu";
                                    e.preventDefault();
                                }}>
                                <Button sx={
                                    {
                                        color:'#ffffff',
                                        fontWeight: 'bold',
                                        fontSize: '0.8rem',
                                        backgroundColor: '#ffa7a7',
                                        borderRadius: '12px',
                                        border: 'none',
                                        padding: '12px 24px',
                                        transition: "all 150ms ease",
                                        cursor: "pointer",
                                    }
                                }> Contact
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item xs={3} sx={{align:'center'}}>
                            <h1 className={classes.creators}> 
                                JianBin <span className={classes.colorText}> Wu </span>
                            </h1>
                            <p> Software Engineer, Frontend </p>
                            <Link className={classes.linkStyle}
                                to='#'
                                onClick={(e) => {
                                    window.location.href = "mailto:jianbin.wu@sjsu.edu";
                                    e.preventDefault();
                                }}>
                                <Button sx={
                                    {
                                        color:'#ffffff',
                                        fontWeight: 'bold',
                                        fontSize: '0.8rem',
                                        backgroundColor: '#ffa7a7',
                                        borderRadius: '12px',
                                        border: 'none',
                                        padding: '12px 24px',
                                        transition: "all 150ms ease",
                                        cursor: "pointer",
                                    }
                                }> Contact
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item xs={3}>
                            <h1 className={classes.creators}> 
                                Paul Junver <span className={classes.colorText}> Soriano </span>
                            </h1>
                            <p> Software Engineer, Frontend </p>
                            <Link className={classes.linkStyle}
                                to='#'
                                onClick={(e) => {
                                    window.location.href = "mailto:pauljunver.soriano@sjsu.edu";
                                    e.preventDefault();
                                }}>
                                <Button sx={
                                    {
                                        color:'#ffffff',
                                        fontWeight: 'bold',
                                        fontSize: '0.8rem',
                                        backgroundColor: '#ffa7a7',
                                        borderRadius: '12px',
                                        border: 'none',
                                        padding: '12px 24px',
                                        transition: "all 150ms ease",
                                        cursor: "pointer",
                                    }
                                }> Contact
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item xs={3}>
                            <h1 className={classes.creators}> 
                                Grace <span className={classes.colorText}> Jung </span>
                            </h1>
                            <p> Software Engineer, Backend </p>
                            <Link className={classes.linkStyle}
                                to='#'
                                onClick={(e) => {
                                    window.location.href = "mailto:gaeun.jung@sjsu.edu";
                                    e.preventDefault();
                                }}>
                                <Button sx={
                                    {
                                        color:'#ffffff',
                                        fontWeight: 'bold',
                                        fontSize: '0.8rem',
                                        backgroundColor: '#ffa7a7',
                                        borderRadius: '12px',
                                        border: 'none',
                                        padding: '12px 24px',
                                        transition: "all 150ms ease",
                                        cursor: "pointer",
                                    }
                                }> Contact
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
            </div>
        </div>
    );
}

export default Contact;