import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { pink } from "@mui/material/colors";
import backGraoundImage from "../../assets/19085844_v1008-25-b.jpg";
import Divider from '@mui/material/Divider';

function HomePage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [petInMyArea, setPetInMyArea] = useState(false);
  const [userInfo, setUserInfo] = useState(false);
  const [petInfo, setPetInfo] = useState([]);
  const label = { inputProps: { "aria-label": "petFavorite" } };
  const [petType, setPetType] = useState("All");

  const handlePetInArea = (event) => {
    setPetInMyArea(event.target.checked);
  };

  const handleChange = (event) => {
    setPetType(event.target.value);
  };

  useEffect(() => {
    document.title = "Home";
    if (loading) {
      return;
    }
    if (!user) {
      navigate("/");
      return;
    } else {
      const fetchData = async () => {
        fetch(`http://localhost:8080/api/account/${user.uid}`).then(
          async (res) => {
            const jsonResult = await res.json();
            setUserInfo(jsonResult);
          }
        );
        if (petInMyArea) {
          fetch(`http://localhost:8080/api/feature/search/${userInfo.zipcode}`)
            .then((response) => response.json())
            .then((res) => setPetInfo(res));
          setPetType("All");
        } else if (petType !== "All") {
          fetch(`http://localhost:8080/api/pet/search/${petType}`)
            .then((response) => response.json())
            .then((res) => setPetInfo(res));
        } else {
          fetch(`http://localhost:8080/api/pet`)
            .then((response) => response.json())
            .then((res) => setPetInfo(res));
        }
      };
      fetchData();
    }
  }, [user, loading, navigate, error, petInMyArea, petType]);

  return (
    <div
      style={{ backgroundImage: `url(${backGraoundImage})`, height: "100vh",backgroundSize: 'cover'}}
    >
      <NavBar></NavBar>
      <Grid
        justifyContent="center"
        alignItems="center"
        display="flex"
        direction="column"
        sx={{ mb: 1, mt: 3 }}
      >
        <Typography  gutterBottom variant="h4" component="div"  sx={{ fontWeight: 'bold'}}>
          Welcome!
        </Typography>
        <Typography gutterBottom variant="h4" component="div" sx={{ fontWeight: 'bold'}}>
          {userInfo.username}
        </Typography>
      </Grid>
      <Divider  sx={{ mb: 1 }}/>
      <div style={{ border: "100px solid hidden" }}>
        <Box justifyContent="flex-end">
          <Grid container justifyContent="flex-end" display="flex">
            <FormControl  variant="filled" sx={{m:1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Pet Types
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={petType}
                onChange={handleChange}
                label="petTypes"
                sx={{ fontWeight: 'bold',
        fontSize: '1rem',}}
              >
                <MenuItem sx={{ fontWeight: 'bold',
        fontSize: '1rem',}}value="All">All</MenuItem>
                <MenuItem sx={{ fontWeight: 'bold',
        fontSize: '1rem',}}value="Dog">Dog</MenuItem>
                <MenuItem sx={{ fontWeight: 'bold',
        fontSize: '1rem',}}value="Cat">Cat</MenuItem>
              </Select>
            </FormControl>
            <FormControlLabel
              control={
                <Checkbox  checked={petInMyArea} onChange={handlePetInArea}  sx={{ 
                  color: pink[800],
                  '&.Mui-checked': {
                    color: pink[600]
                  },  
                }}/>
              }
              label="Show Pet In My Area"
             
            />
          </Grid>
        </Box>
        <Box>
          <Grid container justifyContent="center" display="flex">
            <Grid item>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                sx={{ mb: 3 ,}}
              >
                {petType}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{ padding: 2 }}
          >
            {petInfo.map((pets, index) => {
              return (
                <Grid item xs={2}>
                  <Card key={index} sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={pets.petLink}
                        alt={pets.petName}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {pets.petName}
                        </Typography>
                        <Typography gutterBottom variant="h8" component="div">
                          Owner: {pets.user}
                        </Typography>
                        <Typography gutterBottom variant="h8" component="div">
                          Location: {pets.userZip}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions disableSpacing>
                      <Typography
                        gutterBottom
                        variant="h8"
                        component="div"
                        sx={{ marginRight: "auto" }}
                      >
                        Type: {pets.petType}
                      </Typography>
                      <Checkbox
                        {...label}
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                        sx={{
                          color: pink[800],
                          "&.Mui-checked": {
                            color: pink[600],
                          },
                        }}
                      />
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </div>
      <footer style={{ position: "absolute",
  bottom: "0",
  width: "100%",
  height: "2.5rem"  }}
               
              >
     <a href="https://www.freepik.com/free-vector/seamless-animal-pattern-background-cute-paw-print-vector-illustration_20266394.htm#query=pet%20pattern&position=13&from_view=search&track=sph">Background Image by rawpixel.com</a> on Freepik
     </footer>
    </div>
  );
}

export default HomePage;
