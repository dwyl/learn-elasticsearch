var http = require('http');

var data = JSON.stringify({
  "text" :"everything is awesome"
});
// An object of options to indicate where to post to
var post_options = {
    host: 'localhost',
    port: '9200',
    path: '/twitter/tweets/1234',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
    }
};
// Set up the request
var post_req = http.request(post_options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('Response: ' + chunk);
    });
});
// post the data
post_req.write( data );
post_req.end();
