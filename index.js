var elasticsearch = require('elasticsearch');

// Connect to localhost:9200 and use the default settings
var client = new elasticsearch.Client();

// Connect the client to two nodes, requests will be
// load-balanced between them using round-robin
var client = elasticsearch.Client({
  hosts: [
    'elasticsearch1:9200',
    'elasticsearch2:9200'
  ]
});

// Connect to the this host's cluster, sniff
// for the rest of the cluster right away, and
// again every 5 minutes
var client = elasticsearch.Client({
  host: 'elasticsearch1:9200',
  sniffOnStart: true,
  sniffInterval: 300000
});

// Connect to this host using https, basic auth,
// a path prefix, and static query string values
var client = new elasticsearch.Client({
  host: 'https://user:password@elasticsearch1/search?app=blog'
});
