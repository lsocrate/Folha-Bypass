'use strict'
;(function(){
  var bypassFolha = function () {
    var paywallImage = document.querySelector('map[name=paywallimage]')
    if (!paywallImage) {
      return
    }

    var paywall = paywallImage.parentElement.parentElement
    paywall.style.left = '-9999em'
    document.querySelector('body').style.cssText = "overflow: auto !important;"
  };
  var bypassEstado = function () {
    var wall = document.querySelectorAll('#pw-content,#pw-mask')
    if (!wall) {
      return
    }

    document.querySelector('html').style.cssText = "overflow: auto !important;"
    Array.prototype.slice.call(wall).forEach(function(el) {
      el.remove()
    })
  }

  if (window.location.host.match(/\.estadao\.com\.br$/)) {
    bypassEstado()
  }
  else if (window.location.host.match(/\.folha\.uol\.com\.br$/)) {
    bypassFolha()
  }
})();
