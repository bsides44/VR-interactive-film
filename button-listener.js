AFRAME.registerComponent('button-listener', {
    schema: {
      toPlay: {type: 'boolean', default: true},
    },
    init: function () {
      this.onClick = this.onClick.bind(this);
      this.el.addEventListener('raycaster-intersected', this.onLaser);
      this.el.addEventListener('click', this.onClick);
    },
    onLaser: function(evt) {
      console.log('laser', evt)
    },
    onClick: function (evt) {
      console.log('click')
      var videoEl = document.querySelector("#video").getAttribute('material').src;
      // var videoEl = document.querySelector("#monoPico").components.material.material.map.image;
      if (videoEl) {
        document.querySelector("#video").object3D.visible = true;
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
  });