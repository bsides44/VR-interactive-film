AFRAME.registerComponent('init-page-two', {
    init: function () {
      this.appearButton = this.appearButton.bind(this);
      document.querySelector("#thirdVideo").getAttribute('material').src.pause()
      document.querySelector("#fifthVideo").getAttribute('material').src.pause()

      setTimeout(() => {
        this.appearButton()
      }, 34000);

    },
    appearButton: function () {        
      var portalVid = document.querySelector("#portalVideo")
      var fourthVid = document.querySelector("#fourthVideo")
      var fourthVidVisible = false
      var buttonTwo = document.querySelector("#buttonTwo")
      var textTwo = document.querySelector("#textTwo")
      var buttonThree = document.querySelector("#buttonThree")
      var textThree = document.querySelector("#textThree")

      if (fourthVid) fourthVidVisible = fourthVid.getAttribute('visible')
  
      // Make buttons appear when video playback is at 8
      if (portalVid) {
          buttonTwo.object3D.visible = true;
          textTwo.object3D.visible = true;
          buttonThree.object3D.visible = true;
          buttonThree.components.sound.playSound();
          textThree.object3D.visible = true;
      }
      if (fourthVid && fourthVidVisible) {
        buttonTwo.object3D.visible = true;
        textTwo.object3D.visible = true;
        buttonThree.object3D.visible = true;
        buttonThree.components.sound.playSound();
        textThree.object3D.visible = true;
      }
    }
})