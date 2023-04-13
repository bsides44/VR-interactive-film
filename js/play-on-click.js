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
    var text = document.querySelector("#welcomeText")

    if (text) text.parentNode.removeChild(text);

    if (videoEl) {
      videoEl.play()
      window.removeEventListener('click', this.onClick);
    }
    else return
  },
  remove: function () {
    
  }
});