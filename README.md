# imgs

Image crawler by Node.js.

Have a try click [here](https://blackmatch.cn/api/imgs/).

## Usage

* clone this repo.

* `npm install`

* `npm start`

## Docker

* build

```js
docker build -t <image name> .
```

* run

```js
docker run -p 3000:3000 -d imgs
```

* test

Now you can visit [http://localhost:3000](http://localhost:3000) to check it.

## Examples

basic url: `https://blackmatch.cn/api/imgs`

available types: `tit`、`hip`、`silk`、`leg`、`face`、`other`

https://blackmatch.cn/api/imgs?page=3

https://blackmatch.cn/api/imgs?type=tit&page=3

## Response

```js
[
    {
        "topicId": "1462147",
        "title": "黑暗中的一些光",
        "imgUrl": "https://ww3.sinaimg.cn/bmiddle/0060lm7Tgy1fj7te2briej30qo0zk75v.jpg"
    },
    {
        "topicId": "1462145",
        "title": "蜜桃宝贝",
        "imgUrl": "https://ww4.sinaimg.cn/bmiddle/0060lm7Tgy1fj7tovb1ykj30rs0fmabc.jpg"
    },
    {
        "topicId": "1462145",
        "title": "蜜桃宝贝",
        "imgUrl": "https://ww1.sinaimg.cn/bmiddle/0060lm7Tgy1fj7toofeitj30rs15ojup.jpg"
    },
    {
        "topicId": "1462142",
        "title": "【晒】想要亲亲",
        "imgUrl": "https://ww4.sinaimg.cn/bmiddle/0060lm7Tgy1fj7tohywezj30rs0rs0u4.jpg"
    },
    {
        "topicId": "1461473",
        "title": "周末早上好",
        "imgUrl": "https://ww2.sinaimg.cn/bmiddle/0060lm7Tgy1fj7ualhld4j30rs0z3gor.jpg"
    },
    {
        "topicId": "1461115",
        "title": "Vend",
        "imgUrl": "https://ww4.sinaimg.cn/bmiddle/0060lm7Tgy1fj7td8hec7j30qo0qowf7.jpg"
    },
    {
        "topicId": "1460341",
        "title": "【晒】个侧面",
        "imgUrl": "https://ww2.sinaimg.cn/bmiddle/0060lm7Tgy1fj7u2gggqwj30mk13574r.jpg"
    },
    {
        "topicId": "1460221",
        "title": "【晒】",
        "imgUrl": "https://ww3.sinaimg.cn/bmiddle/0060lm7Tgy1fj7u9vylrnj30rs111gn1.jpg"
    },
    {
        "topicId": "1459698",
        "title": "【晒】睡了么",
        "imgUrl": "https://ww2.sinaimg.cn/bmiddle/0060lm7Tgy1fj7tc85b9vj30jw0rkaau.jpg"
    },
    {
        "topicId": "1459664",
        "title": "新买的泳衣和睡衣~哪个更好看呢~",
        "imgUrl": "https://ww2.sinaimg.cn/bmiddle/0060lm7Tgy1fj7uo0urknj30l20s2q48.jpg"
    },
    {
        "topicId": "1459507",
        "title": "硬啦",
        "imgUrl": "https://ww3.sinaimg.cn/bmiddle/0060lm7Tgy1fj7u23hlnqj30rs0fmabh.jpg"
    },
    {
        "topicId": "1459496",
        "title": "无聊的我",
        "imgUrl": "https://ww4.sinaimg.cn/bmiddle/0060lm7Tgy1fj7tcsryqyj30rs0rrwg4.jpg"
    },
    {
        "topicId": "1459179",
        "title": "怎么大小奶？！",
        "imgUrl": "https://ww1.sinaimg.cn/bmiddle/0060lm7Tgy1fj7u8q1m3gj30bc08rdfu.jpg"
    },
    {
        "topicId": "1458899",
        "title": "【晒】裤子",
        "imgUrl": "https://ww4.sinaimg.cn/bmiddle/0060lm7Tgy1fj7u2gspnmj30rs0ikgmj.jpg"
    },
    {
        "topicId": "1458409",
        "title": "「永远少女心」",
        "imgUrl": "https://ww4.sinaimg.cn/bmiddle/0060lm7Tgy1fj7tc1is5kj30go0cimxc.jpg"
    },
    {
        "topicId": "1458409",
        "title": "「永远少女心」",
        "imgUrl": "https://ww3.sinaimg.cn/bmiddle/0060lm7Tgy1fj7tbtcsigj30o70u9gnm.jpg"
    },
    {
        "topicId": "1458409",
        "title": "「永远少女心」",
        "imgUrl": "https://ww3.sinaimg.cn/bmiddle/0060lm7Tgy1fj7tbufkbcj30ox0x776s.jpg"
    },
    {
        "topicId": "1458337",
        "title": "「如此美丽」",
        "imgUrl": "https://ww2.sinaimg.cn/bmiddle/0060lm7Tgy1fj7tbmua02j30rs10ydi3.jpg"
    },
    {
        "topicId": "1458337",
        "title": "「如此美丽」",
        "imgUrl": "https://ww1.sinaimg.cn/bmiddle/0060lm7Tgy1fj7tbne3q6j30qo0zk40f.jpg"
    },
    {
        "topicId": "1458334",
        "title": "「乖乖」",
        "imgUrl": "https://ww1.sinaimg.cn/bmiddle/0060lm7Tgy1fj7tbh49epj30ku0kugme.jpg"
    }
]
```