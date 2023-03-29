AFRAME.registerComponent('play-on-click', {
  init: function () {
    var videoEl = document.querySelector("#video").getAttribute('material').src;
    var secondVid = document.querySelector("#secondVideo").getAttribute('material').src;
    videoEl.pause()
    secondVid.pause()
    window.addEventListener('click', this.onClick);
  },
  onClick: function () {
    var videoEl = document.querySelector("#video").getAttribute('material').src;
    var planeModel = document.querySelector("#animModel")
    var text = document.querySelector("#welcomeText")

    if (text) text.parentNode.removeChild(text);
    if (videoEl) {
      videoEl.play()
      if (planeModel) {
        planeModel.emit(`startanim001`, null, false);
        planeModel.components.sound.playSound();
      }
      window.removeEventListener('click', this.onClick);
    }
    else return
  },
  remove: function () {
    
  }
});