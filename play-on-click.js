AFRAME.registerComponent('play-on-click', {
  init: function () {
    var videoEl = document.querySelector("#video").getAttribute('material').src;
    videoEl.pause()
    window.addEventListener('click', this.onClick);
  },
  onClick: function () {
    var videoEl = document.querySelector("#video").getAttribute('material').src;
    var text = document.querySelector("#debugger")
    // var videoEl = document.querySelector("#monoPico").components.material.material.map.image;
    if (videoEl) {
      videoEl.play()
      text.object3D.visible = false;
      window.removeEventListener('click', this.onClick);
    }
    else return
  },
  remove: function () {
    
  }
});