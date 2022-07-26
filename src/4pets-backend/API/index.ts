// const express = require("express");

// const PORT = process.env.PORT || 3001;

// const app = express();

// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// }); server.js

//index.ts
import express from 'express';
import cors from 'cors';

import routes from './routes';
import { initDB } from './db';

// initialize firebase
initDB();

const app = express();
const port = 8080;

app.use(cors());
// define a route handler for the default home page
app.use(express.json());
app.use("/API", routes);

// app.get('/', (req, res) => {
//   res.send('Please work');
// })

// start the Express server
app.listen(port, () => {
  console.log( `server started at http://localhost:${ port }` );
});