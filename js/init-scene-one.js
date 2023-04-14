AFRAME.registerComponent('init-scene-one', {
  init: function () {
    this.onClick = this.onClick.bind(this);
    
    var videoEl = document.querySelector("#video").getAttribute('material').src;
    var secondVid = document.querySelector("#secondVideo").getAttribute('material').src;
    var thirdVid = document.querySelector("#thirdVideo").getAttribute('material').src;
    var fourthVid = document.querySelector("#fourthVideo").getAttribute('material').src;
    var fifthVid = document.querySelector("#fifthVideo").getAttribute('material').src;

    videoEl.pause()
    secondVid.pause()
    thirdVid.pause()
    fourthVid.pause()
    fifthVid.pause()

    window.addEventListener('click', this.onClick);
  },
  onClick: function () {
    var videoEl = document.querySelector("#video").getAttribute('material').src;
    var text = document.querySelector("#welcomeText")
    setTimeout(() => {
      this.appearButtons()
    }, 4400);

    if (text) text.parentNode.removeChild(text);

    if (videoEl) {
      videoEl.play()
      window.removeEventListener('click', this.onClick);
    }
    else return
  },
  appearButtons: function () {  
    var buttonOne = document.querySelector("#buttonOne")
    var textOne = document.querySelector("#textOne")
    var buttonTwo = document.querySelector("#buttonTwo")
    var textTwo = document.querySelector("#textTwo")
    var firstVideoVisible = document.querySelector("#video").getAttribute('visible')

    // Make buttons appear when video playback is at 8
    if (firstVideoVisible) {
        buttonOne.object3D.visible = true;
        buttonOne.components.sound.playSound();
        textOne.object3D.visible = true;
        buttonTwo.object3D.visible = true;
        textTwo.object3D.visible = true;
    }
  }
});