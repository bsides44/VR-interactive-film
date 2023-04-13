AFRAME.registerComponent('button-visibility', {
    schema: {
        once: {default: true},
      },
    init: function () {
      this.tick = this.tick.bind(this);
    },
    tick: function () {  
      var videoEl = document.querySelector("#video")
      var buttonOne = document.querySelector("#buttonOne")
      var textOne = document.querySelector("#textOne")
      var buttonTwo = document.querySelector("#buttonTwo")
      var textTwo = document.querySelector("#textTwo")
      var currentTime = videoEl.components.material.data.src.currentTime
      var firstVideoVisible = videoEl.getAttribute('visible')
  
      // Make triangle button appear when video playback is at 8
      if (firstVideoVisible && currentTime >= 8 && this.data.once) {
          buttonOne.object3D.visible = true;
          buttonOne.components.sound.playSound();
          textOne.object3D.visible = true;
          buttonTwo.object3D.visible = true;
          textTwo.object3D.visible = true;
          this.data.once= false
      }
    }
})