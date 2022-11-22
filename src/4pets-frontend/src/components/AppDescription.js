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
                            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
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
                                Meet <span className={classes.colorText}> 4Pets </span>
                            </h1>
                            <p>
                                4Pets is designed for pet owners to meet fellow pet owners. Whether it be a dog, a cat, or a fish, 
                                as long as you own a pet, this application is for you. <br/> Bond over your animal pals and share a new connection. 
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
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      cols: 2,
    },
  ];
