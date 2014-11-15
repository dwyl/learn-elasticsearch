var elasticsearch = require('elasticsearch');

// Connect to localhost:9200 and use the default settings
var client = new elasticsearch.Client();

// Connect the client to two nodes, requests will be
// load-balanced between them using round-robin
var client = elasticsearch.Client({
  hosts: [
    '192.168.33.10:9200',
    '192.168.33.10:9200'
  ],
  log: 'trace'
});

// Connect to the this host's cluster, sniff
// for the rest of the cluster right away, and
// again every 5 minutes
var client = elasticsearch.Client({
  host: '192.168.33.10:9200',
  sniffOnStart: true,
  sniffInterval: 300000
});


setTimeout(function(){
  var D = new Date();
  var date = parseInt(D.getTime()/1000);
  client.create({
        index: 'myindex',
        type: 'mytype',
        id: '1',
        body: {
            title:'Hello World',
            tags: 'tag, me up',
            published: true,
            published_at: date,
        }
    }, function (err, resp) {
      console.log(err);
      console.log(resp)
    });
},2000);

// curl -XDELETE 'http://localhost:9200/myindex/'
