AFRAME.registerComponent('play-on-click', {
  init: function () {
    var videoEl = document.querySelector("#video").getAttribute('material').src;
    videoEl.pause()
    window.addEventListener('click', this.onClick);
  },
  onClick: function () {
    var videoEl = document.querySelector("#video").getAttribute('material').src;
    var planeModel = document.querySelector("#animModel")

    // var videoEl = document.querySelector("#monoPico").components.material.material.map.image;
    if (videoEl) {
      videoEl.play()
      if (planeModel) planeModel.setAttribute('animation', "property: position; to: -50 2 -10; dur: 30000; easing: linear; loop: false");
      window.removeEventListener('click', this.onClick);
    }
    else return
  },
  remove: function () {
    
  }
});