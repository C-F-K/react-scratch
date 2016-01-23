var express = require('express');
var app = express();
app.set('port', (process.argv[2] || 8080))

app.use('/', express.static(__dirname + '/public'));

app.listen(app.get('port'), () => {
	console.log("Listening on port "  + app.get('port'));
});