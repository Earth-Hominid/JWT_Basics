# JSON Web Token - ExpressJS API

![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

This is a basic ExpressJS API showcasing JSON Web Tokens for authentication.

# Description

This basic API was developed in order to pratice coding a JWT Authentication and to have a template that I can refer to in the future.

It utilizes a Bearer token. We call split on the Bearer token to seperate the numerical token from the word 'Bearer', as the token is returned in the format 'Bearer number'. The Bearer token is then split into an array like [Bearer, number]. To get the number we select for array[1].

The 'posts' route is protected with JWT authorization. The token has been set to expire within 30 seconds for demonstation purposes. Postman may be used to view the requests and responses.
