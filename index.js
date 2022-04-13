const express = require('express');
const JWT = require('jsonwebtoken');

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Hellow World!',
  });
});

app.listen(5001, () => console.log('Server is running on 5001'));
