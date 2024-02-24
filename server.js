const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();


app.get('/test', (req, res) => {
    res.send('success');
  });



  app.listen(process.env.PORT, () => {
    console.log(`Server listening at http://localhost:${process.env.PORT}`);
});