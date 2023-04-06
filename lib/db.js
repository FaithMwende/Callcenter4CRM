var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'172.104.253.95',
	user:'mobifarm',
	password:'mobifarm',
	database:'mobifarm'
});
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Database has been Connected..!');
	}
});


module.exports = connection;