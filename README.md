simple-lazyload
===============

Simple Lazyload Images with Adaptive Image Size Support

###What this plugin does:
1. Preloads a loader image
2. Grabs all elements that have a data-lazyload tag
3. Sets source url as loader image url
4. Tries to load adaptive image size based on window width
5. Loads adaptive image url if found on server
6. Loads default image url if adaptive image is not found on server
7. Sets background image on non img tag elements, sets src on all img tag elements
8. Speeds up your webpage or app

###How to use:
To lazyload any image, just set a '**data-lazyload**' attribute in the elements html tag. Include the original image source url in a '**data-img**' attribute like this: data-img="img/whatever.jpg"

Run the function whenever you want to load images:
**lazyload();**

That's it! The plugin will automatically detect node type and set image src on image tags, and background image source on any other element.

###What does adaptive image size mean?
Adaptive Image Size means the plugin will try to load a smaller version of the original image based on screen size. The syntax follows the very familiar bootstrap syntax of [-md, -sm, -xs] - basically what happens is this:
* if screen size is > 1200px : url.filetype is loaded
* if screen size is < 1200px: url-md.filetype is loaded
* if screen size is < 992px: url-sm.filetype is loaded
* if screen size is < 768px: url-xs.filetype is loaded

However, if the adaptive image size is not found on server, it will automatically load the default url and nothing bad happens. Using this technique can save up to 400% bandwidth on mobile devices, I highly recommend it.

###Template:
```
<div data-lazyload data-img="img/whatever.jpg"></div>
<img src="" data-lazyload data-img="img/whatever.jpg"/>
```

###Notes:
* Filetype agnostic - you can use any image filetype, it will still work
* Library agnostic - plain javascript means you can integrate with any framework, zero dependancies

###Testing:
This plugin has been tested in Chrome, Firefox, IE 8+, Safari, iOS, iPad, Android, Windows 8, Windows 8 RT
