// Stored procedure for adding the contact
CREATE DEFINER=`root`@`localhost` PROCEDURE `add_contact`(
	IN _first_name VARCHAR(100),		
 	IN _last_name VARCHAR(100),		
 	IN _email_id VARCHAR(100),
    IN _contact_uid VARCHAR(250),
    OUT _contact_id INTEGER		
)
BEGIN
	INSERT INTO contacts		
 	(	
		first_name,		
 		last_name, 		
 		email_id,		
 		contact_uid 		
	)		
 	VALUES		
 	(	
		_first_name,		
 		_last_name, 		
 		_email_id,		
 		_contact_uid 		
	);		
 			
 	SELECT LAST_INSERT_ID() INTO _contact_id;		

END



//Stored procedure to create the update the contact details
CREATE DEFINER=`root`@`localhost` PROCEDURE `update_contact_details`(
	IN _contact_id INT,		
	IN _first_name VARCHAR(50),		
	IN _last_name VARCHAR(50),
	IN _mail_id VARCHAR(320)	
)
BEGIN
	 UPDATE contacts c
		SET		
			c.first_name = _first_name,		
			c.last_name = _last_name,
			c.email_id = _mail_id		
 		WHERE c.contact_id = _contact_id; 		
END



//Stored procedure to delete a particular record from the database
CREATE DEFINER=`root`@`localhost` PROCEDURE `delete_contact`(
 IN _contact_id INT
)
BEGIN
	DELETE FROM contacts 
    WHERE contact_id = _contact_id;
END



//Stored procedure to update the favorite among the contacts
CREATE DEFINER=`root`@`localhost` PROCEDURE `update_favorite`(
	IN _contact_id INTEGER
)
BEGIN
	UPDATE contacts c	
		SET c.favorite = NOT c.favorite
		WHERE c.contact_id = _contact_id;	
END



//Stored procedure to get the lists of contacts
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_contacts`()
BEGIN
	SELECT  c.contact_id AS contactID,
			c.first_name AS firstName,
			c.last_name AS lastName,
            c.email_id AS mailID,
            c.favorite AS isFavorite
    FROM contacts c;
END
