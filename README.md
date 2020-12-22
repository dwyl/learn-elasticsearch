![elasticsearch logo](http://i.imgur.com/xl1xgjm.png)
[![Build Status](https://travis-ci.org/dwyl/learn-elasticsearch.svg?branch=master)](https://travis-ci.org/dwyl/learn-elasticsearch)

In the next 30 mins you will learn how to use ElasticSearch
to power a great search experience for your project/product/website.

## Why?

For anything more than a *basic* website, ***people*** (visiting/using your
  site/app) ***expect*** to be able to ***search*** through your content
(blog posts, recipes, products, reviews, etc.)

You *could* use [**google custom search**](https://www.google.com/cse) to
provide this functionality and side-step having to run your own (*cluster
of*) search server(s)...  But I suspect your project/customer wants/needs more control over the search experience and that's why you're reading this intro?

### Why *Not* XYZ Database (that *has* Full-Text-Search) ?

Simple/Short answer: Pick the ***Best tool for the job***.

In the past we've used MongoDB's full-text-search (*and even wrote a*
  [***tutorial***](https://github.com/ideaq/mongo-search) *for it*!),
  [MySQL full-text-search](http://dev.mysql.com/doc/refman/5.0/en/fulltext-search.html)
  to *reasonable* success (Deal Searcher V.1 @Groupon) and many of our
  *Rails* friends swear by
  [Postgres full-text-search](http://www.postgresql.org/docs/8.3/static/textsearch.html)
  but *none* of these databases were ***designed from scratch*** to provide
  ***scalable full-text search***. So, if you want search, ***Elasticsearch***!

## What?

![buzz explains elasticsearch](http://i.imgur.com/HfuxgaM.png)

Elasticsearch is a search server based on
[Lucene](http://en.wikipedia.org/wiki/Lucene).
It provides a distributed, multitenant-capable **full-text search** engine
with a RESTful web interface and schema-free JSON documents.
i.e. *awesomeness in a box*!

> Read more: http://www.elasticsearch.org/overview/elasticsearch/

### Whhaaaat...?

![whaaat](http://i.imgur.com/JeOf6lZ.png)

Feeling *bewildered* by that ***buzzword fest***?
let's break it down:

+ ***Real-Time***: a system in which input data is processed within milliseconds so that it is available virtually ***immediately*** as feedback to the process from which it is coming - i.e. things happen without a noticeable delay. An example of "*real time*" is *instant messaging*.  
see: https://en.wikipedia.org/wiki/Real-time_computing

+ "***Near***" *Real-Time*: means there is a small (*but noticeable*) delay. You can insert/update a record in the "index"
and it will be *searchable* in ***less than a second***.
(It is *not immediate*, but its close, so they say "*Near*" Real Time)
And example of "*near real time*" is email (*not quite instant*)

+ **Full-Text** Search: means when you search through the records in an ElasticSearch
database (cluster) your search term(s) will be searched for everywhere in the desired field(s) of the document.
For example: Imagine you have a blog and each blog post has: Title, Intro, Body and Comments section.
When searching for a particular string e.g: "this is awesomeness", you could search in **all-the-fields**
which could return a result in one of the comments.  
read more: https://en.wikipedia.org/wiki/Full_text_search

+ **Distributed** means you can have several ElasticSearch *nodes* in different data centers or regions
to improve retrieval reliability.  
see: https://en.wikipedia.org/?title=Distributed_computing


+ Having a **REST API** means you can access your ElasticSearch cluster using standard HTTP requests.
˜

## How?

There are a few options for running ElasticSearch:  
**A**. Boot a Virtual Machine with ES and all its dependencies (*using Vagrant*)  
**B**. Install the "*binary*" package for your Operating System.  
**C**. Don't install *anything* and just use a *free heroku* instance! (*See: __Heroku__ section below*)


### Download & Install

ElasticSearch ***requires Java 8***, so if you want to install ElasticSearch ("*natively*") on your local machine you will need to have Java running...
We prefer *not* to have Java running on our *personal* machines
(because its [*chronically insecure*](http://krebsonsecurity.com/2014/04/critical-java-update-plugs-37-security-holes/))
so we created a Vagrant box to consistently boot ES (using a VM!) ... see below.

#### Running ElasticSearch on *Any Operating System* with Vagrant

If you aren't using Vagrant, read our Vagrant tutorial *now*:
https://github.com/docdis/learn-vagrant

If you *are* already using Vagrant, simply clone this repo:

```sh
git clone git@github.com:docdis/learn-elasticsearch.git && cd learn-elasticsearch
```

Then run this command (*in your terminal*):

```sh
vagrant up
```

*Note: expect the installation to take a few minutes, go for a walk,
or skip to the Tutorial section below and start watching the video.*


#### Ubuntu

- Install ElasticSearch on Ubuntu:
https://www.digitalocean.com/community/tutorials/how-to-install-elasticsearch-on-an-ubuntu-vps


#### Mac

If you don't mind having Java running on your Mac,
you can use [*Homebrew*](http://brew.sh/) to install ES:

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

- More info on installation options:
http://stackoverflow.com/questions/22850247/installing-elasticsearch-on-osx-mavericks

#### Windows

see: https://www.elastic.co/guide/en/elasticsearch/reference/current/setup-service-win.html  
(*but, seriously, try Vagrant!*)


### ElasticSearch Server Status

To confirm that everything is working as expected, open your terminal and run the following command:

```
curl -XGET http://localhost:9200
```

You should expect to see something similar to:

![elasticsearch-status-response-1 6](https://cloud.githubusercontent.com/assets/194400/8233220/f03d7714-15cc-11e5-9e6d-0f47036b89ef.png)


## Tutorial

Once you have installed ElasticSearch (*following the instructions above*)

> Visit: https://www.elastic.co/webinars/getting-started-with-elasticsearch
(*register using fake data if you want to avoid email spam*) and watch the video.

### Inserting a record using cURL (REST API)

```sh
curl -XPUT 'http://localhost:9200/twitter/tweet/1' -d '{"user":"kimchy","post_date":"2009-11-15T14:12:12","message" : "trying out Elasticsearch"}'
```

### Video Tutorial Code:

If you want to following along with the ElasticSearch getting started video:

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

## Node.js

see: `/nodejs` folder for sample scripts you can run in node.js


## Elixir

This section is about using ElasticSearch within the `Elixir` programming language.
If you are new to `Elixir`,
see: [github.com/dwyl/**learn-elixir**](https://github.com/dwyl/learn-elixir/)
 (_you're in for a treat!_)

Once you know a bit about Elixir, writing to an ElasticSearch cluster
is quite straight forward thanks to @Zatvobor's module `tirexs`
see: https://github.com/Zatvobor/tirexs#getting-started

We've included a simple Write/Read example in
`/elixir/lib/elastic.ex` and `/elixir/lib/elastic_test.ex`

To try it out on your local computer, simply run the following command(s):

```
git clone git@github.com:dwyl/learn-elasticsearch.git
cd learn-elasticsearch
mix deps.get
mix test
```
> Tip: you can copy paste the whole block and run all the commands in order.


+ Extended example:
https://gist.github.com/oivoodoo/845b857b28e24bc1acdc13c18e1b32d6




## Useful Links

- Guide: http://www.elasticsearch.org/guide/ (online docs)
- Talking to ES: http://www.elasticsearch.org/guide/en/elasticsearch/guide/current/_talking_to_elasticsearch.html
- Searching: https://github.com/elasticsearch/elasticsearch-definitive-guide/tree/master/050_Search
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
+ http://www.elasticsearch.org/blog/client-for-node-js-and-the-browser
+ http://www.elasticsearch.org/guide/en/elasticsearch/client/javascript-api/current/quick-start.html


### ELK

ELK is a Logging Stack comprised of ElasticSearch, LogStash & Kibana

- http://www.elasticsearch.org/overview/elkdownloads/
- http://www.elasticsearch.org/overview/kibana/
- http://www.elasticsearch.org/overview/logstash/
- https://www.digitalocean.com/community/tutorials/how-to-use-logstash-and-kibana-to-centralize-and-visualize-logs-on-ubuntu-14-04
- Flume: http://flume.apache.org/
- Fluentd: http://www.fluentd.org/


# tl;dr

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

While writing this post we tried the following modules:

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


### We Wrote a *Simpler* Node.js Module!

We got frustrated using the other modules,
so we wrote a better one: https://github.com/dwyl/esta

#### How is it "Better"?

+ [x] Focus on simplicity
+ [x] Readable code
+ [x] Zero Dependencies (never worry about upgrading to the latest version of node or the module)
+ [x] 100% Test Coverage
+ [x] Optional Backup of Data

## Graphical User Interfaces to ES

http://www.elasticsearch.org/guide/en/elasticsearch/client/community/current/front-ends.html

## Security

- Securing Your Elasticsearch Cluster
https://www.found.no/foundation/elasticsearch-security/

## Pitfalls

### The Split Brain Problem

Where your cluster looses communication and you end up with two masters.

- http://blog.trifork.com/2013/10/24/how-to-avoid-the-split-brain-problem-in-elasticsearch/comment-page-1/
- https://github.com/elasticsearch/elasticsearch/issues/2488

## *Hosted* ElasticSearch Providers

If you prefer not to administer your own database/cluster
there are a few services you can use:

- Amzon: https://aws.amazon.com/elasticsearch-service/
- Bonsai: https://bonsai.io/plans
- Elastic: https://www.elastic.co/pricing/
- QBox: https://qbox.io/pricing

## Host your own ElasticSearch

- Tips for running on AWS:
http://www.elasticsearch.com/webinars/elasticsearch-on-aws/
