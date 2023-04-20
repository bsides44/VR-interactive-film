AFRAME.registerComponent('on-click-accept', {
    init: function () {
        this.playSecondVideo = this.playSecondVideo.bind(this);

        this.el.addEventListener('click', this.playSecondVideo);
    },
    playSecondVideo: function() {
        // replace video source
        var videoPlayer = document.querySelector("#videoPlayer")
        videoPlayer.setAttribute("src", "#eeOutdoor");

        // play video
        var vidSource = document.querySelector("#eeOutdoor")
        vidSource.muted = false
        vidSource.play()
  
        // emit playing event
		this.el.emit('videoChanged', {id: "#eeOutdoor"});

        // make challenge disappear
        document.querySelector("#challengeText").object3D.visible = false
        document.querySelector("#acceptButton").object3D.visible = false
        
        // make egg counter appear
        document.querySelector("#eggCount").object3D.visible = true

        setTimeout(() => {
            this.appearButtons()
        }, 10000);

        // remove listeners
        this.el.removeEventListener('click', this.playSecondVideo);
    },
    appearButtons: function() {
        var nextButton = document.querySelector("#nextButton")
        nextButton.object3D.visible = true;
    }
  })