// Replaces images with their 2x versions if the device is 'retina'.
// Only replaces images with the class hi-res.
// @source http://www.kylejlarson.com/blog/2012/creating-retina-images-for-your-website/

(function () {

  if (window.devicePixelRatio == 2) {

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
          imageName += "@2x" + imageType;

          // Rename image.
          images[i].src = imageName;

        }

      }

    }

  }

})();
