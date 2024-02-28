const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const connect = require('./db/config');
const authRoutes = require('./routes/authRoutes');


app.get('/test', (req, res) => {
    res.send('success');
  });

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(authRoutes);

  connect();

  app.listen(process.env.PORT, () => {
    console.log(`Server listening at http://localhost:${process.env.PORT}`);
});