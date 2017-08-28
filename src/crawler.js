const superagent = require('superagent');
const cheerio = require('cheerio');
const config = require('./config');

const parsePageHtml = (text) => {
  const $ = cheerio.load(text);
  const eles = $('.thumbnails li');
  const imgs = [];
  eles.each((idx, ele) => {
    const $ele = $(ele);
    const tId = $ele.find('.img_single a').attr('href').split('/').pop();
    imgs.push({
      topicId: tId,
      title: $ele.find('.img_single img').attr('title'),
      imgUrl: $ele.find('.img_single img').attr('src'),
    });
  });

  return imgs;
};

class Crawler {
  getPageImgs(url, query) {
    return new Promise((resolve, reject) => {
      const req = superagent.get(url);
      if (query && Object.keys(query).length > 0) {
        req.query(query);
      }
      if (config.timeout) {
        req.timeout(config.timeout);
      }

      req.end((err, res) => {
        if (err) {
          return reject(err);
        }

        if (res.text) {
          const imgs = parsePageHtml(res.text);
          return resolve(imgs);
        } else {
          return reject(new Error('load page html failed!'));
        }
      });
    });
  }
}

module.exports = Crawler;
