AFRAME.registerComponent('button-visibility', {
    init: function () {
      this.appearButtons = this.appearButtons.bind(this);

      setTimeout(() => {
        this.appearButtons()
      }, 8000);
    },
    appearButtons: function () {  
      var buttonOne = document.querySelector("#buttonOne")
      var textOne = document.querySelector("#textOne")
      var buttonTwo = document.querySelector("#buttonTwo")
      var textTwo = document.querySelector("#textTwo")
      var firstVideoVisible = document.querySelector("#video").getAttribute('visible')
  
      // Make triangle button appear when video playback is at 8
      if (firstVideoVisible) {
          buttonOne.object3D.visible = true;
          buttonOne.components.sound.playSound();
          textOne.object3D.visible = true;
          buttonTwo.object3D.visible = true;
          textTwo.object3D.visible = true;
      }
    }
})