AFRAME.registerComponent('button-visibility', {
    schema: {
        once: {default: true},
      },
    init: function () {
      this.tick = this.tick.bind(this);
    },
    tick: function () {  
      var videoEl = document.querySelector("#video")
      var triangle = document.querySelector("#nextVideoButton")
      var text = document.querySelector("#nextText")
      var currentTime = videoEl.components.material.data.src.currentTime
      var firstVideoVisible = videoEl.getAttribute('visible')
  
      // Make triangle button appear when video playback is at 8 of 23 seconds
      if (firstVideoVisible && currentTime >= 8 && this.data.once) {
          triangle.object3D.visible = true;
          triangle.components.sound.playSound();
          text.object3D.visible = true;
          this.data.once= false
      }
    }
})