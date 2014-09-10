![elasticsearch logo](http://i.imgur.com/xl1xgjm.png)


In the next 30 mins you will learn how to use ElasticSearch
to power a great search experience for your project/product/website.

## Why?

For anything more than a basic website, ***people expect*** to be
able to ***search*** through your content (blog posts, recipes, products, reviews, etc.)

You *could* use [**google custom search**](https://www.google.com/cse) to
provide this functionality and side-step having to run your own cluster
of search servers...  But I suspect your project/customer wants/needs more
control over the search experience and that's why you're reading this...

## What?

Elasticsearch is a search server based on
[Lucene](http://en.wikipedia.org/wiki/Lucene).
It provides a distributed, multitenant-capable **full-text search** engine
with a RESTful web interface and schema-free JSON documents.
i.e. *awesomeness in a box*!

> Read more: http://www.elasticsearch.org/overview/elasticsearch/


## How?

**Note**: ElasticSearch ***requires Java 7*** :unamused:

### Download & Install

<<<<<<< HEAD
#### Vagrant + Ubuntu

If you aren't using Vagrant, go read my vagrant tutorial *now*:
https://github.com/nelsonic/learn-vagrant

- Install ElasticSearch on Ubuntu:
https://www.digitalocean.com/community/tutorials/how-to-install-elasticsearch-on-an-ubuntu-vps


=======
>>>>>>> 009eca29dc134848216d44c79eacb60733dec080
#### Mac

```sh
brew install elasticsearch
```

To have launchd start elasticsearch at login:
```
ln -sfv /usr/local/opt/elasticsearch/*.plist ~/Library/LaunchAgents
```
Then to load elasticsearch now:
```
launchctl load ~/Library/LaunchAgents/homebrew.mxcl.elasticsearch.plist
```
Or, if you don't want/need launchctl, you can just run:
```
elasticsearch --config=/usr/local/opt/elasticsearch/config/elasticsearch.yml
```

- http://stackoverflow.com/questions/22850247/installing-elasticsearch-on-osx-mavericks

#### Manual

- http://www.elasticsearch.org/overview/elkdownloads/



### Install (Node Module)

```sh
npm install elasticsearch --save
```


## ElasticSearch Server Status

```
curl -XGET 'http://localhost:9200/_status'
```
see: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/indices-status.html



## Useful Links

- http://www.elasticsearch.org/blog/client-for-node-js-and-the-browser/
- http://thomasardal.com/running-elasticsearch-on-linux-using-vagrant/
- http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/setup-repositories.html



## Background Reading

- Elasticsearch (wiki): http://en.wikipedia.org/wiki/Elasticsearch
- Faceted Search: http://en.wikipedia.org/wiki/Faceted_search
- Solr vs Elasticsearch: http://stackoverflow.com/questions/10213009/solr-vs-elasticsearch
- More detailed Solr vs ES: http://blog.sematext.com/2012/08/23/solr-vs-elasticsearch-part-1-overview
- A Clustered Setup: http://mookid.dk/oncode/archives/3518
- Reverse Port Forwarding: http://stackoverflow.com/questions/16244601/vagrant-reverse-port-forwarding/17012410#17012410

## History

I chose elasticsearch to power the search for a project I lead at [News](http://news.co.uk/)
after careful consideration of Solr.
There are great [heroku addons](https://addons.heroku.com/?q=elasticsearch)
(we used [Bonsai](https://addons.heroku.com/bonsai) because they have
a *free* dev tier) and the quality of the search results is superb.


## Troubleshooting

Tried to start elastic search with:
```
elasticsearch --config=/usr/local/opt/elasticsearch/config/elasticsearch.yml
```
But got the error:
```
Exception in thread "main" java.lang.UnsupportedClassVersionError: org/elasticsearch/bootstrap/Elasticsearch : Unsupported major.minor version 51.0
```
