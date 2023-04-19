AFRAME.registerComponent('play-video-bin', {
    schema: {
        toStop: {type: 'string', default: '#firstVideo'},
        replaceStoppedVideoSrc: {type: 'string', default: '#eeIndoorOne'},
        toPlay: {type: 'string', default: '#secondVideo'},
        prevValue: {type: 'string', default: 'Go sing?'},
        nextValue: {type: 'string', default: 'Go sing?'},
        buttonTimer: {type: 'number', default: 3000},
      },
    init: function () {
        this.playNextVideo = this.playNextVideo.bind(this);
        this.appearButtons = this.appearButtons.bind(this);

        this.el.addEventListener('click', this.playNextVideo);
    },
    playNextVideo: function() {
        // remove video 
        var stopVid = document.querySelector(this.data.toStop)
        stopVid.getAttribute('material').src.pause()
        stopVid.object3D.visible = false;
        // if moving forward, replace first source
        if (this.data.replaceStoppedVideoSrc) document.querySelector("#firstVideo").setAttribute("src", this.data.replaceStoppedVideoSrc);

        // make second video appear
        var playVid = document.querySelector(this.data.toPlay)
        var src = playVid.getAttribute('src')
        var vidSource = document.querySelector(src)
        vidSource.muted = false
        playVid.getAttribute('material').src.play()
        playVid.object3D.visible = true;
  
        // make buttons disappear
        document.querySelector("#nextButton").object3D.visible = false
        document.querySelector("#prevButton").object3D.visible = false

        // set next buttons to appear
        setTimeout(() => {
            this.appearButtons()
        }, this.data.buttonTimer);
        
        // remove listeners
        // this.el.removeEventListener('click', this.playNextVideo);
    },
    appearButtons: function() {
        var prevButton = document.querySelector("#prevButton")
        var nextButton = document.querySelector("#nextButton")

        // new button text
        document.querySelector("#prevText").setAttribute('value', this.data.prevValue)
        document.querySelector("#nextText").setAttribute('value', this.data.nextValue)

        // new button onclick values
        prevButton.setAttribute("play-video", {toStop: "#thirdVideo", toPlay: "#secondVideo", buttonTimer: 3000, prevValue: "Go sing?", nextValue: "Go hunt\nindoors?"})
        nextButton.setAttribute("play-video", {toStop: "#thirdVideo", toPlay: "#firstVideo", replaceStoppedVideoSrc: "#sing2", buttonTimer: 3000, prevValue:"Go sing?", nextValue:"Go hunt\nindoors?"})

        // Make buttons appear when video playback is at 3
        prevButton.object3D.visible = true;
        nextButton.object3D.visible = true;
    }
  })