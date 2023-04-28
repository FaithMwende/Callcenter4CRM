var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'170.187.190.99',
	user:'ivr_phone',
	password:'ivr_phone',
	database:'ivr_phone'
});
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Database has been Connected..!');
	}
});


module.exports = connection;