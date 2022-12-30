const express = require('express')
const app = express();
const cors = require('cors');

const route = require('./route');

app.use(cors());
app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.use('/', route);

app.listen(3001, () => {
    console.log('Listening on 3001');
})