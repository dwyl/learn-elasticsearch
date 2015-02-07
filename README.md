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

## Why *Not* XYZ Database (that *has* Full-Text-Search) ?

Simple/Short answer: Pick the ***Best tool for the job***.

In the past I've used MongoDB's full-text-search (and even wrote a
  [tutorial](https://github.com/ideaq/mongo-search) for it!) I've used
  [MySQL full-text-search](http://dev.mysql.com/doc/refman/5.0/en/fulltext-search.html)
  to *reasonable* success (Deal Searcher V.1 @Groupon!) and many of my
  *Rails* friends swear by
  [Postgres full-text-search](http://www.postgresql.org/docs/8.3/static/textsearch.html)
  but none of these databases were *designed from scratch* to provide
  *scalable* full-text search. So, if you want search, ***elasticsearch***!

## What?

Elasticsearch is a search server based on
[Lucene](http://en.wikipedia.org/wiki/Lucene).
It provides a distributed, multitenant-capable **full-text search** engine
with a RESTful web interface and schema-free JSON documents.
i.e. *awesomeness in a box*!

> Read more: http://www.elasticsearch.org/overview/elasticsearch/


## How?

> http://www.elasticsearch.org/blog/client-for-node-js-and-the-browser
> http://www.elasticsearch.org/guide/en/elasticsearch/client/javascript-api/current/quick-start.html


### Download & Install

Given that ElasticSearch ***requires Java 7***, I've created a Vagrant box
to consistently boot ES on any OS (using a VM!)

#### Vagrant + Ubuntu

If you aren't using Vagrant, go read my vagrant tutorial *now*:
https://github.com/nelsonic/learn-vagrant

- Install ElasticSearch on Ubuntu:
https://www.digitalocean.com/community/tutorials/how-to-install-elasticsearch-on-an-ubuntu-vps


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

#### Running ElasticSearch on *Any* OS with Vagrant

If you are unfamiliar with vagrant please take a few minutes
to read: https://github.com/nelsonic/learn-vagrant



- http://www.elasticsearch.org/overview/elkdownloads/

```sh
curl -XPUT 'http://localhost:9200/twitter/tweet/1' -d '{"user":"kimchy","post_date":"2009-11-15T14:12:12","message" : "trying out Elasticsearch"}'
```


### Install (Node Module)

```sh
npm install elasticsearch --save
```


## ElasticSearch Server Status

```
curl -XGET http://localhost:9200
```
see: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/indices-status.html


# > Continue:

- [ ] http://www.sitepoint.com/building-recipe-search-site-angular-elasticsearch/  
- [x] http://www.elasticsearch.org/guide/en/elasticsearch/guide/current/_conventions_used_in_this_book.html  
- [ ] http://www.elasticsearch.org/guide/en/elasticsearch/guide/current/_talking_to_elasticsearch.html
- [ ] http://www.elasticsearch.org/guide/en/elasticsearch/guide/current/_talking_to_elasticsearch.html
- [ ] Video:
http://www.elasticsearch.org/webinars/getting-started-with-elasticsearch/?watch=1

### Video Tutorial Code:

If you want to follow along with the ElasticSearch getting started video:

Insert a record:
```sh
curl -XPUT 'http://localhost:9200/vehicles/tv/one' -d '{"color":"green","driver":{"born":"1959-09-07","name":"Walter White"},"make":"Pontiac","model":"Aztek","value_usd":5000.0, "year":2003}'
```

Check the **mapping** for the index:
```sh
curl http://localhost:9200/vehicles/_mapping?pretty
```

To delete an index you accidentally created:
```sh
curl -XDELETE 'http://localhost:9200/vehicles/'
```
Search:
```js
curl 'localhost:9200/vehicles/tv/_search?q=_id:one&pretty'
```
Insert another document/record:
```sh
curl -XPUT 'http://localhost:9200/vehicles/tv/two' -d '{"color":"black","driver":{"born":"1949-01-09","name":"Michael Knight"},"make":"Pontiac","model":"Trans Am","value_usd":9999999.00, "year":1982}'
```

curl 'http://localhost:9200/vehicles/_search?q=pontiac&pretty'

### Updating a Record (Index)

The Update API is quite well documented:
http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/docs-update.html



## Useful Links

- Guide: http://www.elasticsearch.org/guide/ (online docs)
- http://www.elasticsearch.org/blog/client-for-node-js-and-the-browser/
- http://thomasardal.com/running-elasticsearch-on-linux-using-vagrant/
- http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/setup-repositories.html
- http://exploringelasticsearch.com/overview.html
- The ***Definitive Guide***: http://www.elasticsearch.org/guide/en/elasticsearch/guide/current/
- ***Exploring ElasticSearch*** by Andrew Cholakian: http://exploringelasticsearch.com/

### Video

- Elasticsearch from the bottom up: https://www.youtube.com/watch?v=PpX7J-G2PEo
- Getting started video:
~~http://www.elasticsearch.org/webinars/getting-started-with-elasticsearch/?watch=1~~
- Getting Down and Dirty with ElasticSearch: https://www.youtube.com/watch?v=7FLXjgB0PQI (Clinton Gormley)
- Running ES in Travis-CI (build testing): http://docs.travis-ci.com/user/database-setup/#ElasticSearce

## Background Reading

- Elasticsearch (wikipedia): http://en.wikipedia.org/wiki/Elasticsearch
- Beginner's Guide to Elasticsearch: http://seanmcgary.com/posts/beginners-guide-to-elasticsearch
- Faceted Search: http://en.wikipedia.org/wiki/Faceted_search
- Solr vs Elasticsearch: http://stackoverflow.com/questions/10213009/solr-vs-elasticsearch
- More detailed Solr vs ES: http://blog.sematext.com/2012/08/23/solr-vs-elasticsearch-part-1-overview
- A Clustered Setup: http://mookid.dk/oncode/archives/3518
- Reverse Port Forwarding: http://stackoverflow.com/questions/16244601/vagrant-reverse-port-forwarding/17012410#17012410
- How HipChat use ElasticSearch for storing messages: https://blog.hipchat.com/category/how-hipchat-works/
- Decent (but old) tutorial: http://www.sitepoint.com/building-recipe-search-site-angular-elasticsearch
- **Testing ElasticSearch with Node.js**:
http://faiq.me/testing-elasticsearch-node (use sinon)

### ELK

ELK is a Logging Stack comprised of ElasticSearch, LogStash & Kibana

- http://www.elasticsearch.org/overview/elkdownloads/
- http://www.elasticsearch.org/overview/kibana/
- http://www.elasticsearch.org/overview/logstash/
- https://www.digitalocean.com/community/tutorials/how-to-use-logstash-and-kibana-to-centralize-and-visualize-logs-on-ubuntu-14-04
- Flume: http://flume.apache.org/
- Fluentd: http://www.fluentd.org/


## History

I chose elasticsearch to power the search for a project I lead at [News](http://news.co.uk/)
after careful consideration of Solr.
There are great [heroku addons](https://addons.heroku.com/?q=elasticsearch)
(we used [Bonsai](https://addons.heroku.com/bonsai) because they have
a *free* dev tier) and the quality of the search results is superb.


## Troubleshooting

> see **ERRORS.md**

### How do we Archive a Record?

> need to research this

## *Which* Node.js Module Should I Use for ElasticSearch?

There are over a hundred modules for ElasticSearch on NPM  
see: http://node-modules.com/search?q=elasticsearch

While writing this post I tried:

- ElasticSearch (the *official* module):
https://github.com/elasticsearch/elasticsearch-js works(ish) but the
[API is promise-based](http://www.elasticsearch.org/guide/en/elasticsearch/client/javascript-api/current/quick-start.html)
which forces anyone using it to use promises. Not for me
- Elastical: https://github.com/ramv/node-elastical
simple API but the author describes it as "*not quite finished*"
(and I have to agree). Documentation is good, and it only uses two
3rd party dependencies (good news). Has not been updated in 7 months,
could be worth submitting a PR to - except that there are a couple of
open PRs: https://github.com/ramv/node-elastical/pulls which are being
ignored by the module maintainer, never a good sign...
- Simple ElasticSearch:
https://github.com/BryanDonovan/node-simple-elasticsearch
99% coverage, single dependency (qs); promising. but *master* build is faling
[23 failing tests](https://travis-ci.org/BryanDonovan/node-simple-elasticsearch/builds/32594301)
and it hasn't been updated in 4 months; generally low movement.
- elastic.js https://github.com/fullscale/elastic.js
JavaScript implementation of the elasticsearch Query DSL.
High number of stars (410)
But uses the ElasticSearch (*Official*) module (see above) which *forces*
promises and uses *Grunt* where its *not required*.
- **es** https://github.com/ncb000gt/node-es the simplest one I found.
99% code coverage. has not been updated in a while...


### I Wrote a *Better* One!

I got frustrated using the other modules,
so I wrote a better one: https://github.com/nelsonic/esta

#### How is it "Better"?

+ [x] Focus on simplicity
+ [x] Readable code
+ [x] Zero Dependencies (never worry about upgrading to the latest version of node or the module)
+ [x] 100% Test Coverage
+ [x] Optional Backup of Data if FS available

## Graphical User Interfaces to ES

http://www.elasticsearch.org/guide/en/elasticsearch/client/community/current/front-ends.html

## Security

- Securing Your Elasticsearch Cluster
https://www.found.no/foundation/elasticsearch-security/

## Pitfals

### The Split Brain Problem

Where your cluster looses communication and you end up with two masters.

- http://blog.trifork.com/2013/10/24/how-to-avoid-the-split-brain-problem-in-elasticsearch/comment-page-1/
- https://github.com/elasticsearch/elasticsearch/issues/2488

## *Hosted* ElasticSearch Providers

If you prefer not to administer your own database/cluster
there are a few services you can use:

- Bonsai: https://app.bonsai.io/plans
- Found: https://www.found.no/pricing/
- QBox: https://qbox.io/pricing

## Host your own ElasticSearch

- Tips for running on AWS:
http://www.elasticsearch.com/webinars/elasticsearch-on-aws/
