const mysql = require('mysql');
const logger = require('../../utils/logger');

var con = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "password": "Rajasekar*1",
    "port": 3306,
    "multipleStatements": true,
    "databaseName": "contactlist"
});

con.connect((err) => {
    if (err) {
        logger.error("Could not connect to mql server!");
        return;
    }

    logger.info("Connected!");
    
    con.query('USE contactlist', (err, result) => {
        if (err) {
            logger.error('could not connect');
            return;
        }
        
        logger.info('Using the contactlist database');
    });
});

module.exports = con;