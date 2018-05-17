const contacts = require('../database/contacts.db');
const utils = require('./utils');

const addContact = (req, res) => {
    let firstName = req.body.first_name;
    let lastName = req.body.last_name;
    let emailID = req.body.email;
    let contactUid  = req.body.contact_uid;
    let errorMessage;

    

    contacts
        .addContact(firstName, lastName, emailID, contactUid)
        .then((result) => {
            //logger.info(req, result);

            //contact_id = utils.arrayFirstElementToObject(result);
            //res.status(201).json({contact_id});
            res.status(201).json(result);
        })
        .catch((error) => { 
            //logger.error(req, error);
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
            //logger.info(req, result);

            //contact_id = utils.arrayFirstElementToObject(result);
            //res.status(201).json({contact_id});
            res.status(201).json({result});
        })
        .catch((error) => { 
            //logger.error(req, error);
            res.status(500).json({ error });
        });
}


const updateIsFavorite = (req, res) => {
    let contactId = req.body.contact_id;
    
    contacts
        .updateFavorite(contactId)
        .then((result) => {
            //logger.info(req, result);

            //contact_id = utils.arrayFirstElementToObject(result);
            //res.status(201).json({contact_id});
            res.status(201).json({result});
        })
        .catch((error) => { 
            //logger.error(req, error);
            res.status(500).json({ error });
        });
}



const deleteContact = (req, res) => {
    let contactId = req.body.contact_id;
    let firstName = req.body.first_name;
    let lastName = req.body.last_name;
    let emailID = req.body.email;


    contacts
        .deleteContact(contactId)
        .then((result) => {
            //logger.info(req, result);

            //contact_id = utils.arrayFirstElementToObject(result);
            //res.status(201).json({contact_id});
            res.status(201).json({result});
        })
        .catch((error) => { 
            //logger.error(req, error);
            res.status(500).json({ error });
        });
}


module.exports = {
    addContact,
    updateContact,
    deleteContact,
    updateIsFavorite
};
