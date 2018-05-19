const mysql = require('mysql');
const logger = require('../../utils/logger');
const mysqlConfig = require('../../config/mysql.config');

const con = mysql.createConnection(mysqlConfig);

//Connection with a specific database is made here, and checked.
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