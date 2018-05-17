const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const contactAPI = require('./api/contacts.api');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(cors());



app.listen(port, (req, res) => console.log('Running on port 8080'));

app.get('/get_contact_list', (req, res) => {
    res.send('HAI');
})

app.get('/', (req, res) => {
    res.send('Index Page');
})

app.post('/add_contact', contactAPI.addContact);

app.put('/update_contact', contactAPI.updateContact);

app.put('/update_favorite', contactAPI.updateIsFavorite);

app.delete('/delete_contact', contactAPI.deleteContact);