retina.js
=========

Script to convert images for "retina" displays

## How it works

When a page is loaded retina.js checks media queries ([madrobby's media queries](https://gist.github.com/4161897)) to see if the display the page is being rendered on is 'retina' (meaning high pixel density). If it's a retina quality display, it replaces all html images with a new image path that has '2x' appended to the filename. This means that you need to create 2x versions of images and place them alongside your 1x images with 2x appended to the filename. The script uses a symbol separator to help keep the filename namespace clear. By default '@' is the namespace separator, which follows convention elsewhere. However, in some cases the '@' symbol will be an invalid filename character (for instance, on AppEngine).

This is a little bit more of a manual approach than something like [imulus's retina.js](http://retinajs.com/) which actually automatically checks for the existence of image files with '@2x' appended to the end of the filename and replaces them if they exist. With this version, you have to add a class to the image in order for the script to attempt replacement. In lots of use cases you may be updating existing sites and may not have 2x images of existing graphics. This more manual approach saves the processing and requests that are required to automatically check all images.

## Usage

Include retina.js in the footer of your site. If you'd like to use a different separator than the '@' symbol, somewhere before you load retina.js, declare a variable named 'retinaImageSeperator' and assign it a string of the separator you'd like to use:

``` javascript
retinaImageSeperator = '--';
```

For all images that you'd like replaced, add a class named 'hi-res'. Images without this class won't be replaced.

So...

``` html
<img class='hi-res' src='avatar.png' />
```

... will be replaced with:

``` html
<img class='hi-res' src='avatar@2x.png' />
```
