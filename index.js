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

// Display Contacts API End points
app.get('/get_contacts', contactAPI.getContacts);

// Add Contacts API End points
app.post('/add_contact', contactAPI.addContact);

// Update Contacts API End points
app.put('/update_contact', contactAPI.updateContact);

// Update favorite contact API End points
app.put('/update_favorite', contactAPI.updateIsFavorite);

// Delete contact API End points
app.delete('/delete_contact', contactAPI.deleteContact);