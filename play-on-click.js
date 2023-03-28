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

    // var videoEl = document.querySelector("#monoPico").components.material.material.map.image;
    if (videoEl) {
      videoEl.play()
      if (planeModel) planeModel.emit(`startanim001`, null, false);
      window.removeEventListener('click', this.onClick);
    }
    else return
  },
  remove: function () {
    
  }
});