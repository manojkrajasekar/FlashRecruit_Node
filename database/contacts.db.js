const con = require('./utils/connection');
const processor = require('./utils/processors');

/* This method calls the stored procedure, which add a contact with the passed input paramaters
and stores in the database. After saving the data, a promise is returned, which is further resolved */
const addContact = (firstName, lastName, emailID, contactUid) => {
    return new Promise((resolve, reject) => {
        con.query('SET @out = null; CALL add_contact(? ,?, ?, ?, @out); SELECT @out as contact_id',
        [firstName, lastName, emailID, contactUid],
        processor.processContactResults(resolve, reject));
    });
}


/* This method calls the stored procedure, which updates a contact with the passed input paramaters
in the database. After the execution, a promise is returned, which is further resolved */
const updateContactDetails = (contactId, firstName, lastName, mailId) => {
    return new Promise((resolve, reject) => {
        con.query(
            'CALL update_contact_details(?, ?, ?, ?)', 
            [contactId, firstName, lastName, mailId], 
            processor.processResults(resolve, reject)
        );
    });
};


/* Stored procedure which deletes a contact is called here, with contatcID as the input parameter 
and upon execution a promise is returned */
const deleteContact = (contactId) => {
    return new Promise((resolve, reject) => {
        con.query(
            'CALL delete_contact(?)', 
            [contactId], 
            processor.processResults(resolve, reject)
        );
    });
}


/* Stored procedure is called, where the favorite contact is updated, with contactID as the input parameter,
by updating the isFavorite column in the contacts database. A promise is returned */
const updateFavorite = (contactId) => {
    return new Promise((resolve, reject) => {
        con.query(
            'CALL update_favorite(?);', 
            [contactId], 
            processor.processUpdateResults(resolve, reject)
        );
    });
}


/* Stored procedure when executed, gets all the contacts from the contacts database, 
 and a promise is returned */
const getContacts = () => {
    return new Promise((resolve, reject) => {
        con.query(
            'CALL get_contacts(); ', 
            processor.processResults(resolve, reject)
        );
    });
}



module.exports = {
    addContact,
    updateContactDetails,
    deleteContact,
    updateFavorite,
    getContacts
};


