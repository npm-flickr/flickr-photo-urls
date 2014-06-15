require('with-env')();

var test = require("prova");
var urls = require("./")({
  key: process.env.FLICKR_API_KEY
});

test('urls', function (t) {

  urls('14321741011', function (error, result) {
    t.plan(13);
    t.error(error);
    t.deepEqual(result.square, { "label": "Square", "width": 75, "height": 75, "source": "https:\/\/farm3.staticflickr.com\/2922\/14321741011_aeb3b41d62_s.jpg", "url": "https:\/\/www.flickr.com\/photos\/azer\/14321741011\/sizes\/sq\/", "photo": true });
    t.deepEqual(result.largeSquare, { "label": "Large Square", "width": 150, "height": 150, "source": "https:\/\/farm3.staticflickr.com\/2922\/14321741011_aeb3b41d62_q.jpg", "url": "https:\/\/www.flickr.com\/photos\/azer\/14321741011\/sizes\/q\/", "photo": true });
    t.deepEqual(result.thumbnail, { "label": "Thumbnail", "width": 100, "height": 67, "source": "https:\/\/farm3.staticflickr.com\/2922\/14321741011_aeb3b41d62_t.jpg", "url": "https:\/\/www.flickr.com\/photos\/azer\/14321741011\/sizes\/t\/", "photo": true });
    t.deepEqual(result.small, { "label": "Small", "width": 240, "height": 160, "source": "https:\/\/farm3.staticflickr.com\/2922\/14321741011_aeb3b41d62_m.jpg", "url": "https:\/\/www.flickr.com\/photos\/azer\/14321741011\/sizes\/s\/", "photo": true });
    t.deepEqual(result.small320, { "label": "Small 320", "width": 320, "height": 213, "source": "https:\/\/farm3.staticflickr.com\/2922\/14321741011_aeb3b41d62_n.jpg", "url": "https:\/\/www.flickr.com\/photos\/azer\/14321741011\/sizes\/n\/", "photo": true });
    t.deepEqual(result.medium, { "label": "Medium", "width": 500, "height": 333, "source": "https:\/\/farm3.staticflickr.com\/2922\/14321741011_aeb3b41d62.jpg", "url": "https:\/\/www.flickr.com\/photos\/azer\/14321741011\/sizes\/m\/", "photo": true });
    t.deepEqual(result.medium640, { "label": "Medium 640", "width": 640, "height": 427, "source": "https:\/\/farm3.staticflickr.com\/2922\/14321741011_aeb3b41d62_z.jpg", "url": "https:\/\/www.flickr.com\/photos\/azer\/14321741011\/sizes\/z\/", "photo": true });
    t.deepEqual(result.medium800, { "label": "Medium 800", "width": 800, "height": 534, "source": "https:\/\/farm3.staticflickr.com\/2922\/14321741011_aeb3b41d62_c.jpg", "url": "https:\/\/www.flickr.com\/photos\/azer\/14321741011\/sizes\/c\/", "photo": true });
    t.deepEqual(result.large, { "label": "Large", "width": 1024, "height": 683, "source": "https:\/\/farm3.staticflickr.com\/2922\/14321741011_aeb3b41d62_b.jpg", "url": "https:\/\/www.flickr.com\/photos\/azer\/14321741011\/sizes\/l\/", "photo": true });
    t.deepEqual(result.large1600, { "label": "Large 1600", "width": 1600, "height": 1067, "source": "https:\/\/farm3.staticflickr.com\/2922\/14321741011_5d4a393159_h.jpg", "url": "https:\/\/www.flickr.com\/photos\/azer\/14321741011\/sizes\/h\/", "photo": true });
    t.deepEqual(result.large2048, { "label": "Large 2048", "width": 2048, "height": 1365, "source": "https:\/\/farm3.staticflickr.com\/2922\/14321741011_3c581b37ec_k.jpg", "url": "https:\/\/www.flickr.com\/photos\/azer\/14321741011\/sizes\/k\/", "photo": true });
    t.deepEqual(result.original, { "label": "Original", "width": 5472, "height": 3648, "source": "https:\/\/farm3.staticflickr.com\/2922\/14321741011_0ddc14584b_o.jpg", "url": "https:\/\/www.flickr.com\/photos\/azer\/14321741011\/sizes\/o\/", "photo": true });

  });

});
