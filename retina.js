// Replaces images with their 2x versions if the device is 'retina'.
// Only replaces images with the class hi-res.
// @source http://www.kylejlarson.com/blog/2012/creating-retina-images-for-your-website/

(function () {

  var seperator = (typeof retinaImageSeperator == 'undefined') ? '@' : retinaImageSeperator;

  var mediaQuery = "(min--moz-device-pixel-ratio: 1.5),\
                    (-o-min-device-pixel-ratio: 3/2),\
                    (-webkit-min-device-pixel-ratio: 1.5),\
                    (min-device-pixel-ratio: 1.5),\
                    (min-resolution: 144dpi),\
                    (min-resolution: 1.5dppx)";

  if (window.matchMedia(mediaQuery).matches) {

    var images = document.getElementsByTagName('img');

    // Loop through the imgs.
    for (var i = 0; i < images.length; i++) {

      var classes = images[i].className.split(' ');

      for (key in classes) {

        if (classes[key] == 'hi-res') {

          // First check and removed any ? or # at end of src path.
          var questionPosition = images[i].src.lastIndexOf('?');
          var poundPosition = images[i].src.lastIndexOf('#');
          var periodPosition = images[i].src.lastIndexOf('.');

          if (questionPosition > periodPosition) {

            images[i].src = images[i].src.substr(0, questionPosition);

          }

          if (poundPosition > periodPosition) {

            images[i].src = images[i].src.substr(0, poundPosition);

          }

          var imageType = images[i].src.substr(-4);
          var imageName = images[i].src.substr(0, images[i].src.length - 4);
          imageName += seperator + "2x" + imageType;

          // Rename image.
          images[i].src = imageName;

        }

      }

    }

  }

})();
