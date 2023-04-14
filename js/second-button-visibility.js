AFRAME.registerComponent('second-button-visibility', {
  schema: {
      portalOnce: {default: true},
      fourthOnce: {default: true},
    },
  init: function () {
    this.appearPortals = this.appearPortals.bind(this);
    document.querySelector("#fifthVideo").getAttribute('material').src.pause()
    setTimeout(() => {
      this.appearPortals
    }, 8000);

  },
  appearPortals: function () {  
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