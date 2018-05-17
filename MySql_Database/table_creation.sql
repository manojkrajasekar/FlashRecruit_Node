//To create the table named contacts
DROP TABLE IF EXISTS contacts;
CREATE TABLE contacts
(
	contact_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, 
	first_name VARCHAR(100),		
	last_name VARCHAR(100),		
 	email_id VARCHAR(100),
    contact_uid VARCHAR(250),
	favorite BOOLEAN default 0
) ENGINE = 'InnoDB';