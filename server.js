var express = require('express');
var app = express();
app.set('port', (process.argv[2] || 8080))

app.use('/', (req, res) => {
	res.send("<h1>ayy lmao</h1>");
});

app.listen(app.get('port'), () => {
	console.log("Listening on port "  + app.get('port'));
});