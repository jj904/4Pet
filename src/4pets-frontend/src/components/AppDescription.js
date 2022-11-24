import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Collapse, Grid, ImageList, ImageListItem } from '@mui/material';
import { height } from '@mui/system';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '50px',
        width: '95%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'right',
        height: '90vh',
    },
    container: {
        textAlign: 'center'
    },
    colorText: {
        color: '#ffa7a7',
    }, 
    gridPhoto: {
        backgroundImage: `url("https://foxbaltimore.com/resources/media2/16x9/full/1015/center/80/a49ffcd2-bf28-42c6-abfc-db97780165ec-large16x9_GettyImages1060636890.jpg")`,
        backgroundSize: 'cover',
    },
    title: {
        color: '#000',
        fontSize: '3.5rem',
    },
}));

function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

export default function AppDescription () {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);
    return (
        <div className={classes.root}>
            <Collapse 
            in={checked}
            {... (checked ? {timeout: 1000} : {})}
            collapsedHeight={50}
            >
                <Grid container spacing={4}>
                    <Grid item xs={7}>
                    <ImageList
                        sx={{ width: '100%', maxHeight: 600 }}
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
                                <span>Meet</span><span className={classes.colorText}> 4Pets </span>
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
                <div className={classes.container}>
                    
                    <div>
                        
                    </div>
                </div>
        </Collapse>
        </div>
    );
}

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1579119134757-5c38803f34fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      title: 'Dog Kissing',
      rows: 5,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1605464095425-08a9c189e477?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      title: 'Cat',
      rows: 5,
      cols: 2
    },
  ];
