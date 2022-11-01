import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { storage } from "../../firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
  deleteObject,
} from "firebase/storage";
import { doc, setDoc, deleteDoc } from "firebase/firestore";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { db } from "../../firebase";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function ProfilePage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [open, setOpen] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [petInfo, setPetInfo] = useState([]);
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState([]);
  const imageListRef = ref(storage, user.uid + "/petImgs/");
  const [state, setState] = useState([]);
  const [values, setValues] = useState({
    petName: "",
    petType: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const imgChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const refreshPage = () => {
    window.location.reload(false);
  };
  const handleDelete = async (urls, petName) => {
    const desertRef = ref(storage, urls);
    await deleteDoc(doc(db, "Users", user.uid, "Pets", petName));
    // Delete the file
    await deleteObject(desertRef)
      .then(() => {
        refreshPage();
        // File deleted successfully
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
  };

  const handleUpload = async () => {
    if (image == null) {
      return;
    }
    //image file upload
    const imageRef = ref(
      storage,
      user.uid + "/petImgs/" + values.petName + "/" + image.name
    );
    await uploadBytes(imageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setUrl((prev) => [...prev, url]);
        setDoc(doc(db, "Users", user.uid, "Pets", values.petName), {
          petName: values.petName,
          petType: values.petType,
          date: new Date(),
          bg_img: url,
        })
          .then((result) => {
            handleClose();
            refreshPage();
            console.log(result);
          })
          .catch((error) => {
            console.log(error); //console창에 error가 나옴.
          });
      });
    });
  };

  useEffect(() => {
    document.title = "Profile";
    if (loading) {
      return;
    }
    if (!user) {
      navigate("/login");
      return;
    }
    const fetchData = async () => {
      fetch(`http://localhost:8080/api/account/${user.uid}`).then(
        async (res) => {
          const jsonResult = await res.json();
          setUserInfo(jsonResult);
        }
      );

      fetch(`http://localhost:8080/api/pet/${user.uid}`)
        .then((response) => response.json())
        .then((res) => setPetInfo(res));
    };
    fetchData();
  }, [user, loading, navigate, error]);

  return (
    <div>
      <NavBar></NavBar>
      <Box justifyContent="center" alignItems="center" sx={{ mb: 3, mt: 3 }}>
        <Typography gutterBottom variant="h4" component="div" sx={{ mb: 3 }}>
          {userInfo.username}
        </Typography>
        <Typography gutterBottom variant="h6" component="div" sx={{ mb: 3 }}>
          Email: {userInfo.email}
        </Typography>
      </Box>
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Pet</DialogTitle>
          <DialogContent>
            <TextField
              sx={{ mb: 3 }}
              autoFocus
              margin="dense"
              id="name"
              label="Pet Name"
              type="text"
              fullWidth
              variant="standard"
              value={values.petName}
              onChange={handleChange("petName")}
            />
            <TextField
              sx={{ mb: 3 }}
              margin="dense"
              id="name"
              label="Pet Type"
              type="text"
              fullWidth
              variant="standard"
              value={values.petType}
              onChange={handleChange("petType")}
            />
            <input type="file" onChange={imgChange} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleUpload}>Submit</Button>
          </DialogActions>
        </Dialog>

        <Box>
          <Grid container justifyContent="flex-end" display="flex">
            <Grid item xs={5.5}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ mb: 3 }}
              >
                My Pets
              </Typography>
            </Grid>
            <Grid item xs={0.9}>
              <Button
                variant="outlined"
                onClick={handleClickOpen}
                sx={{ mb: 3 }}
              >
                Add Pet
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={2} justifyContent="center">
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
                      <Button
                        aria-label="delete"
                        sx={{ marginLeft: "auto" }}
                        onClick={() => handleDelete(pets.petLink, pets.petName)}
                      >
                        <DeleteOutlineIcon />
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default ProfilePage;
