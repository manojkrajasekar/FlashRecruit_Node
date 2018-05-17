const con = require('./utils/connection');
const processor = require('./utils/processors');

const addContact = (firstName, lastName, emailID, contactUid) => {
    return new Promise((resolve, reject) => {
        con.query('SET @out = null; CALL add_contact(? ,?, ?, ?, @out); SELECT @out as contact_id',
        [firstName, lastName, emailID, contactUid],
        processor.processContactResults(resolve, reject));
    });
}

const updateContactDetails = (contactId, firstName, lastName, mailId) => {
    return new Promise((resolve, reject) => {
        con.query(
            'CALL update_contact_details(?, ?, ?, ?)', 
            [contactId, firstName, lastName, mailId], 
            processor.processResults(resolve, reject)
        );
    });
};

const deleteContact = (contactId) => {
    return new Promise((resolve, reject) => {
        con.query(
            'CALL delete_contact(?)', 
            [contactId], 
            processor.processResults(resolve, reject)
        );
    });
}

const updateFavorite = (contactId) => {
    return new Promise((resolve, reject) => {
        con.query(
            'SET @out = null; CALL update_favorite(?, @OUT); SELECT @out as is_favorite', 
            [contactId], 
            processor.processUpdateResults(resolve, reject)
        );
    });
}



module.exports = {
    addContact,
    updateContactDetails,
    deleteContact,
    updateFavorite
};


