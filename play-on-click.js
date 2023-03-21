AFRAME.registerComponent('play-on-click', {
  schema: {
    toPlay: { type: 'boolean', default: true }
  },
  init: function () {
    this.onClick = this.onClick.bind(this);
    window.addEventListener('click', this.onClick);
  },
  onClick: function (evt) {
    var videoEl = this.el.getAttribute('material').src;
    // var videoEl = document.querySelector("#monoPico").components.material.material.map.image;
    if (videoEl) {
      this.el.object3D.visible = true;
      if (this.data.toPlay) {
        videoEl.play()
        document.querySelector("#play").object3D.visible = false
        document.querySelector("#pause").object3D.visible = true
        this.data.toPlay = !this.data.toPlay
      } else {
        videoEl.pause()
        document.querySelector("#play").object3D.visible = true
        document.querySelector("#pause").object3D.visible = false
        this.data.toPlay = !this.data.toPlay
      }
    }
    else return
  },
  remove: function () {
    window.removeEventListener('click', this.onClick);
  }
});