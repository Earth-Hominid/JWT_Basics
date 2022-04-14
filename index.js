const express = require('express');
const JWT = require('jsonwebtoken');

// For a react app, token needs to be saved local storage.

const app = express();

app.get('/api', (req, res) => {
  res.json({
    message: 'Hellow World!',
  });
});

app.post('/api/posts', verifyToken, (req, res) => {
  JWT.verify(req.token, 'secretkey', (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: 'The post has been created!',
        authData,
      });
    }
  });
});

app.post('/api/login', (req, res) => {
  //Mock user
  const user = {
    id: 1,
    username: 'Chris',
    email: 'chris@gmail.com',
  };

  // Added in expires in 30 seconds, can view on postman the expired info. sent in the object under "exp".
  JWT.sign({ user }, 'secretkey', { expiresIn: '30s' }, (err, token) => {
    res.json({
      token,
    });
  });
});

// The tokens format will be:
// Authorization: Bearer <access_token>

// Verify token
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers['authorization'];
  // Check if bearer is undefined
  if (typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ');
    // Get token from the array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}

app.listen(5001, () => console.log('Server is running on 5001'));
