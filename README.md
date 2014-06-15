## flickr-photo-urls

Get source urls with varied sizes of a Flickr photo

## Install

```bash
$ npm install flickr-photo-urls
```

## Usage

```js
var urls = require('flickr-photo-urls')({
  key: 'api-key'
})

urls('14321741011', function (error, result) {
  if (error) return callback(error);

  result.square
  // => { "label": "Square", "width": 75, "height": 75, "source": "https:\/\/farm3.staticflickr.com\/2922\/14321741011_aeb3b41d62_s.jpg", "url": "https:\/\/www.flickr.com\/photos\/azer\/14321741011\/sizes\/sq\/", "photo": true }

  result.large2048
  // => { "label": "Large 2048", "width": 2048, "height": 1365, "source": "https:\/\/farm3.staticflickr.com\/2922\/14321741011_3c581b37ec_k.jpg", "url": "https:\/\/www.flickr.com\/photos\/azer\/14321741011\/sizes\/k\/", "photo": true }
})
```

See `test.js` for more info.

[flickr-client](http://github.com/npm-flickr/flickr-client) can be passed to avoid repeating auth options:

```js
var client = require('flickr-client')({
  key: 'api-key'
});

var urls = require('flickr-photo-urls')(client)
```
