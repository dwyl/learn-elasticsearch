
Unable to Index/Insert. getting error:

```
{ error: 'MapperParsingException[failed to parse]; nested: ElasticsearchParseException[Failed to derive xcontent from (offset=0, length=21): [109, 101, 115, 115, 97, 103, 101, 61, 104, 101, 108, 108, 111, 37, 50, 48, 119, 111, 114, 108, 100]]; ',
status: 400 }
```

Looked at:

- http://stackoverflow.com/questions/16707072/getting-error-mapper-parsing-exception-while-indexing
- http://stackoverflow.com/questions/11017543/elasticsearch-parse-exception-error-when-attempting-to-index-pdf

Neither of these solve the issue...

- - -

Tried to start elastic search with:
```
elasticsearch --config=/usr/local/opt/elasticsearch/config/elasticsearch.yml
```
But got the error:
```
Exception in thread "main" java.lang.UnsupportedClassVersionError: org/elasticsearch/bootstrap/Elasticsearch : Unsupported major.minor version 51.0
```


Tried `npm start` but got:

```sh
npm start

> learn-elasticsearch@0.0.1 start /Users/n/code/learn-elasticsearch
> node index.js

Elasticsearch ERROR: 2014-10-06T20:57:07Z
Error: Request error, retrying -- getaddrinfo ENOTFOUND
at Log.error (/Users/n/code/learn-elasticsearch/node_modules/elasticsearch/src/lib/log.js:213:60)
at checkRespForFailure (/Users/n/code/learn-elasticsearch/node_modules/elasticsearch/src/lib/transport.js:194:18)
at HttpConnector.<anonymous> (/Users/n/code/learn-elasticsearch/node_modules/elasticsearch/src/lib/connectors/http.js:146:7)
at ClientRequest.bound (/Users/n/code/learn-elasticsearch/node_modules/elasticsearch/node_modules/lodash-node/modern/internals/baseBind.js:56:17)
at ClientRequest.emit (events.js:95:17)
at Socket.socketErrorListener (http.js:1551:9)
at Socket.emit (events.js:95:17)
at net.js:833:16
at process._tickCallback (node.js:419:13)

Elasticsearch WARNING: 2014-10-06T20:57:07Z
Unable to revive connection: http://elasticsearch1:9200/

Elasticsearch WARNING: 2014-10-06T20:57:07Z
No living connections
```

> Make sure you put the IP address of your server in your configuration.
