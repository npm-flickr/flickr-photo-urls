var createClient = require("flickr-client");
var variableName = require("variable-name");

var client;

module.exports = setup;

function setup (options) {
  client = createClient(options);
  return photoURLs;
}

function photoURLs (photoId, callback) {
  client('photos.getSizes', { photo_id: photoId }, function (error, response) {
    if (error) return callback(error);

    var result = {};

    var i = response.sizes.size.length;
    while (i--) {
      if (response.sizes.size[i].media == 'video') response.sizes.size[i].video = true;
      if (response.sizes.size[i].media == 'photo') response.sizes.size[i].photo = true;
      delete response.sizes.size[i].media == 'photo';

      response.sizes.size[i].width = Number(response.sizes.size[i].width);
      response.sizes.size[i].height = Number(response.sizes.size[i].height);

      result[variableName(response.sizes.size[i].label)] = response.sizes.size[i];
    }

    callback(undefined, result);

  });
}
