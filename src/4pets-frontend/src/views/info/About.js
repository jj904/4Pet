import { autocompleteClasses, Grid, ImageList, ImageListItem  } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AboutCover from "../../components/AboutCover";
import AppDescription from "../../components/AppDescription";
import Header from "../../components/Header";
import StickyHeader from "../../components/StickyHeader";
import React, { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '50px',
        width: '95%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'right',
        height: '80vh',
    },
    description:{
        fontSize:'1.3rem',
    },
    container: {
        backgroundColor: 'white',
        height: "100vh",
    },
    colorText: {
        color: "#ffa7a7"
    }
    
}));

function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

function About(){
    const classes = useStyles();
    useEffect(() => {
        document.title = "About";
    })
    return (
        <div>
            <StickyHeader/>
            <AboutCover/>
            <div className={classes.root}>
            <Grid container spacing={4}>
                    <Grid item xs={7}>
                    <ImageList
                        sx={{ margin: '1px', width: '100%', maxHeight: 600 }}
                        variant="quilted"
                        cols={4}
                        rowHeight={130}
                        >
                        {itemData.map((item) => (
                            <ImageListItem 
                            key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                            <img
                                {...srcset(item.img, 121, item.rows, item.cols)}
                                alt={item.title}
                                loading="lazy"
                            />
                            </ImageListItem>
                        ))}
                        </ImageList>
                    </Grid>
                    <Grid item xs={5} sx={{align:'center'}}>
                            <h1 className={classes.title}> 
                                The <span className={classes.colorText}> Idea </span>
                            </h1>
                            <p className={classes.description}>
                            Finding people to meet up with on Facebook is not easy to do because pet owners would have to comb through various large groups of people to find people that are nearby. 
                            </p>
                            <p className={classes.description}>
                            Even if they find nearby pet owners there is no guarantee that they will want to talk. 
                           
                            An application that simplifies this process would help greatly.
                            </p>
                            <p className={classes.description}>
                              Our project would allow for pet owners to be able to find other pet owners, pet trainers, or even pet breeders that are nearby and be able to talk to them. 
                            </p>
                            <p className={classes.description}>
                            This would make it easier for people to get together with people that want to meet them and let their pets make new friends, get exercise or diet help, or even have babies. 
                            </p>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1579119134757-5c38803f34fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      title: 'Dog Kissing',
      rows: 5,
      cols: 4,
    },
  ];

export default About;