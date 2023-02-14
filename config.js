var mysql = require('mysql');

module.exports = {
	connection : mysql.createConnection ({
		host : 'localhost',
		database : 'node_matrimony',//'DBMSproject',
		user : 'root', // mysql username
	 	password : '', //mysql password
	})
}
