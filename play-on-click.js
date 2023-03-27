AFRAME.registerComponent('play-on-click', {
  init: function () {
    var videoEl = document.querySelector("#video").getAttribute('material').src;
    videoEl.pause()
    window.addEventListener('click', this.onClick);
  },
  onClick: function () {
    var videoEl = document.querySelector("#video").getAttribute('material').src;
    var meModel = document.querySelector("#animModel")

    // var videoEl = document.querySelector("#monoPico").components.material.material.map.image;
    if (videoEl) {
      videoEl.play()
      meModel.setAttribute('animation-mixer',"loop:repeat");
      window.removeEventListener('click', this.onClick);
      
    }
    else return
  },
  remove: function () {
    
  }
});