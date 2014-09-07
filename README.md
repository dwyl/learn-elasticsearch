![elasticsearch logo](http://i.imgur.com/xl1xgjm.png)


In the next 30 mins you will learn how to use ElasticSearch
to power a great search experience for your project/product/website.

## Why?

For anything more than a basic website, ***people expect*** to be able
to ***search*** for content, products, etc.

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

## How?

### Download & Install

http://www.elasticsearch.org/overview/elkdownloads/


### Install (Node Module)

```sh
npm install elasticsearch --save
```





## Useful Links

- http://www.elasticsearch.org/blog/client-for-node-js-and-the-browser/




## Background Reading

- Elasticsearch (wiki): http://en.wikipedia.org/wiki/Elasticsearch
- Faceted Search: http://en.wikipedia.org/wiki/Faceted_search
- Solr vs Elasticsearch: http://stackoverflow.com/questions/10213009/solr-vs-elasticsearch
- More detailed Solr vs ES: http://blog.sematext.com/2012/08/23/solr-vs-elasticsearch-part-1-overview

## History

I chose elasticsearch to power the search for a project I lead at [News](http://news.co.uk/)
after careful consideration of Solr.
There are great [heroku addons](https://addons.heroku.com/?q=elasticsearch)
(we used [Bonsai](https://addons.heroku.com/bonsai) because they have
a *free* dev tier) and the quality of the search results is superb.
