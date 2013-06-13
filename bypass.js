'use strict'
;(function(){
  var go = function () {
    var paywallImage = document.querySelector('map[name=paywallimage]')
    if (!paywallImage) {
      return
    }

    var paywall = paywallImage.parentElement.parentElement
    paywall.style.left = '-9999em'
    document.querySelector('body').style.cssText = "overflow: auto !important;"
  };

  if (document.readyState == 'complete') {
    go()
  } else {
    document.onreadystatechange = function () {
      if (document.readyState == 'complete') {
        go()
      }
    }
  }
})();
