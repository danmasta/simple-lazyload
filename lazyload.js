function lazyLoad() {
  'use strict';
  
  var preload = window.preload || null;
  if (document.images) {
    preload = new Image().src = '/img/loader.gif';
  }
  
  var imageitems = document.querySelectorAll('[data-lazyload]');
  var newimages = [];
  for (var i = 0; i < imageitems.length; i++) {
    newimages.push({
      elem: imageitems[i],
      url: imageitems[i].getAttribute('data-img'),
      img: new Image(),
      setSpinner: function setSpinner() {
        this.elem.style.backgroundImage = 'url("/img/loader.gif")';
        this.elem.style.backgroundSize = 'auto auto';
      },
      setStyle: function setStyle(url) {
        if(this.getNodeType() === 'IMG') {
          this.elem.src = url;
        } else {
          this.elem.style.backgroundImage = 'url(' + url + ')';
          this.elem.style.backgroundSize = 'cover';
        }
      },
      loadAdaptiveImg: function loadImg() {
        var _this = this;
        var url = this.getAdaptiveUrl();
        this.img.onload = function() {
          _this.setStyle(url);
        };
        this.img.onerror = function() {
          _this.loadDefaultImg();
        };
        this.img.src = url;
      },
      loadDefaultImg: function() {
        var _this = this;
        var url = this.getDefaultUrl();
        this.img.onload = function() {
          _this.setStyle(url);
        };
        this.img.onerror = function() {
          throw new Error('Image not found, please check data-img url');
        };
        this.img.src = url;
      },
      getAdaptiveUrl: function() {
        var w = window.outerWidth;
        var url = this.url.split('.', 2);
        var newUrl;
        if (w < 768){
          newUrl = url[0] + '-xs.' + url[1];
        } else if(w < 992){
          newUrl = url[0] + '-sm.' + url[1];
        } else if(w < 1200){
          newUrl = url[0] + '-md.' + url[1];
        } else {
          newUrl = this.getDefaultUrl();
        }
        return newUrl;
      },
      getDefaultUrl: function() {
        return this.url;
      },
      getNodeType: function() {
        return this.elem.nodeName;
      }
    });
    newimages[i].setSpinner();
    newimages[i].loadAdaptiveImg();
  }
}