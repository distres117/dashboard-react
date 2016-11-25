const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.static('public'));

app.listen(3000, ()=>console.log('Dev server running on 3000...'));