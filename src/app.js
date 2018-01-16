const express = require('express');

const config = require('./config');
const CrawlerClass = require('./crawler');
const crawler = new CrawlerClass();
const app = new express();

app.listen(config.port, () => {
  console.log(`app is running on ${config.port}`);
});

const handleRequest = async (req, res) => {
  try {
    const query = req.query;
    const queryParams = {
      pager_offset: parseInt(query.page) > 0 ? parseInt(query.page) : 1
    };
    if (query.type && config.type[query.type]) {
      queryParams.cid = config.type[query.type];
    }

    const imgs = await crawler.getPageImgs(config.baseUrl, queryParams);
    res.json(imgs);
  } catch (error) {
    res.status(404).end();
  }
};

app.get('/', (req, res) => {
  handleRequest(req, res);
});
