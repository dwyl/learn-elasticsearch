var querystring = require('querystring'); // to build our post string
var http = require('http');

function insert(id,tweet) {
  // Build the post string from an object
  var post_data = querystring.stringify({
    "tweet" : tweet,
    "text" :"my amazing tweet text"
  });

  // An object of options to indicate where to post to
  var post_options = {
      host: 'localhost',
      port: '9200',
      path: '/twitter/tweets/'+id+'/',
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': post_data.length
      }
  };
  console.log(' - - - - ');
  console.log(post_options);
  console.log(' - - - - ');
  console.log(post_data);
  console.log(' - - - - ');
  // Set up the request
  var post_req = http.request(post_options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
          console.log('Response: ' + chunk);
      });
  });

  // post the data
  post_req.write(post_data);
  post_req.end();

}

insert('1234', 'hello world');
