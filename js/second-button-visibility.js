AFRAME.registerComponent('second-button-visibility', {
    schema: {
        portalOnce: {default: true},
        fourthOnce: {default: true},
      },
    init: function () {
      this.tick = this.tick.bind(this);
      document.querySelector("#fifthVideo").getAttribute('material').src.pause()

    },
    tick: function () {  
      var portalVid = document.querySelector("#portalVideo")
      var fourthVid = document.querySelector("#fourthVideo")

      var buttonTwo = document.querySelector("#buttonTwo")
      var textTwo = document.querySelector("#textTwo")
      var buttonThree = document.querySelector("#buttonThree")
      var textThree = document.querySelector("#textThree")
      if (portalVid){
        var portalVidPlayback = portalVid.components.material.data.src.currentTime
      }
      if (fourthVid){
        var fourthVidPlayback = fourthVid.components.material.data.src.currentTime
        var fourthVidVisible = fourthVid.getAttribute('visible')
      }
  
      // Make buttons appear when video playback is at 8
      if (portalVid && portalVidPlayback >= 8 && this.data.portalOnce) {
          buttonTwo.object3D.visible = true;
          textTwo.object3D.visible = true;
          buttonThree.object3D.visible = true;
          buttonThree.components.sound.playSound();
          textThree.object3D.visible = true;
          this.data.portalOnce= false
      }
      if (fourthVid && fourthVidVisible && fourthVidPlayback >= 8 && this.data.once) {
        buttonTwo.object3D.visible = true;
        textTwo.object3D.visible = true;
        buttonThree.object3D.visible = true;
        buttonThree.components.sound.playSound();
        textThree.object3D.visible = true;
        this.data.fourthOnce= false
    }
    }
})