AFRAME.registerComponent('init-scene-one', {
  init: function () {
    this.onClick = this.onClick.bind(this);
    
    var videoPlayer = document.querySelector("#videoPlayer").getAttribute('material').src;
    videoPlayer.pause()

    window.addEventListener('click', this.onClick);
  },
  onClick: function () {
    var videoPlayer = document.querySelector("#videoPlayer").getAttribute('material').src;
    var welcomeText = document.querySelector("#welcomeText")

    // Welcome text to disappear on first click
    if (welcomeText) welcomeText.parentNode.removeChild(welcomeText);

    // Video to play on first click
    if (videoPlayer) {
      var vidSource = document.querySelector("#intro")
      vidSource.muted = false
      vidSource.play()
      window.removeEventListener('click', this.onClick);
    }

    // Challenge text to appear at end of intro
    setTimeout(() => {
      this.appearChallenge()
    }, 5800);
  },
  appearChallenge: function () {  
    var challengeText = document.querySelector("#challengeText")
    var acceptButton = document.querySelector("#acceptButton")
    var videoPlayer = document.querySelector("#videoPlayer")

    // Make challenge appear when video playback is at 5
    if (videoPlayer) {
      challengeText.object3D.visible = true;
      acceptButton.object3D.visible = true;
    }
  }
});