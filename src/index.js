const express = require('express');
const dotenv = require('dotenv');
const http = require('http');
const cors = require('cors');
const routes = require('./routes');
const { verifySession } = require("./middlewares");

dotenv.config();

const app = express();
const server = http.Server(app);

app.use(cors());
app.use(express.json());
app.use('/auth', verifySession);
app.use(routes);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
