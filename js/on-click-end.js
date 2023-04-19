AFRAME.registerComponent('on-click-end', {
    init: function () {
        this.playLastVideo = this.playLastVideo.bind(this);

        this.el.addEventListener('click', this.playLastVideo);
    },
    playLastVideo: function() {
        // replace video source
        var videoPlayer = document.querySelector("#videoPlayer")
		videoPlayer.getAttribute('material').src.play()
  
        // make challenge disappear
        document.querySelector("#victoryText").object3D.visible = false
        document.querySelector("#friendsButton").object3D.visible = false

        // remove listeners
        this.el.removeEventListener('click', this.playLastVideo);
    }
  })