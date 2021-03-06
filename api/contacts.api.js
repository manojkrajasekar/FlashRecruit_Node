const contacts = require('../database/contacts.db');


const addContact = (req, res) => {
    let firstName = req.body.first_name;
    let lastName = req.body.last_name;
    let emailID = req.body.email;
    let contactUid  = req.body.contact_uid;
    let errorMessage;

    contacts
        .addContact(firstName, lastName, emailID, contactUid)
        .then((result) => {
            res.status(201).json(result);
        })
        .catch((error) => { 
            res.status(500).json({ error });
        });
}


const updateContact = (req, res) => {
    let contactId = req.body.contact_id;
    let firstName = req.body.first_name;
    let lastName = req.body.last_name;
    let emailID = req.body.email;


    contacts
        .updateContactDetails(contactId, firstName, lastName, emailID)
        .then((result) => {
            res.status(201).json({result});
        })
        .catch((error) => { 
            //logger.error(req, error);
            res.status(500).json({ error });
        });
}


const updateIsFavorite = (req, res) => {
    let contactId = req.body.contactId;
    
    contacts
        .updateFavorite(contactId)
        .then((result) => {
            res.status(201).json({result});
        })
        .catch((error) => { 
            res.status(500).json({ error });
        });
}



const deleteContact = (req, res) => {
    let contactId = req.body.contact_id;
    
    contacts
        .deleteContact(contactId)
        .then((result) => {
            res.status(201).json({result});
        })
        .catch((error) => { 
            res.status(500).json({ error });
        });
}


const getContacts = (req, res) => {
    
    contacts
        .getContacts()
        .then((result) => {
            res.status(201).json({result});
        })
        .catch((error) => { 
            res.status(500).json({ error });
        });
}


module.exports = {
    addContact,
    updateContact,
    deleteContact,
    updateIsFavorite,
    getContacts
};
