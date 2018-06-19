const express = require('express');
const cors = require('cors');

const config = require('./config');
const CrawlerClass = require('./crawler');
const crawler = new CrawlerClass();
const app = new express();

// cors
app.use(cors());

// 设置请求头
// application/json  接口返回json数据
// charset=utf-8 解决json数据中中文乱码
app.use("*", function(request, response, next) {
  response.writeHead(200, { "Content-Type": "application/json;charset=utf-8" });
  next();
});

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
    // res.json(imgs);
    // res.status(200).send(imgs);
    res.end(JSON.stringify(imgs));
  } catch (error) {
    res.status(404).end();
  }
};

app.get('/', (req, res) => {
  handleRequest(req, res);
});
