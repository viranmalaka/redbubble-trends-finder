const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  console.log('here I got requests');
})

app.listen(3000, () => {
  console.log('listining');
})