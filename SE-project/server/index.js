import DBchecker from './database/check.js'
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import postRouters from './routes/posts.js'

const app = express();
var corsOptions = {
    origin: "http://localhost:8081"
  };

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the internet."});
  });
app.use('/posts', postRouters);

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors(corsOptions));

const PORT = process.env.PORT|| 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
