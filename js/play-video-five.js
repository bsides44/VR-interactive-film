AFRAME.registerComponent('play-video-five', {
    schema: {
      once: {default: true},
    },
    init: function () {
        this.playNextVideo = this.playNextVideo.bind(this);
        this.tick = this.tick.bind(this);
        var button = document.querySelector("#buttonThree")

        button.addEventListener('click', this.playNextVideo);
    },
    playNextVideo: function() {
        // ARTICULATE video

        // remove video 
        var videoEl = document.querySelector("#fourthVideo")
        var portalVid = document.querySelector("#portalideo")
        if (videoEl){
            videoEl.getAttribute('material').src.pause()
            videoEl.object3D.visible = false;
        }
        if (portalVid){
            portalVid.getAttribute('material').src.pause()
            portalVid.object3D.visible = false;
        }
  
        // make next video appear
        var nextVideoEl = document.querySelector("#fifthVideo")
        nextVideoEl.getAttribute('material').src.play()
        nextVideoEl.object3D.visible = true;
  
        // make buttons disappear
        var button = document.querySelector("#buttonThree")
        button.object3D.visible = false;
        document.querySelector("#textThree").object3D.visible = false
        document.querySelector("#buttonTwo").object3D.visible = false
        document.querySelector("#textTwo").object3D.visible = false 
        
        // remove listeners
        button.removeEventListener('click', this.playNextVideo);
    },
    tick: function () {  
        var videoEl = document.querySelector("#fifthVideo")
        var videoVisible = videoEl.getAttribute('visible')
        // currenttime not working
        var currentTime = videoEl.components.material.data.src.currentTime
        console.log('currentTime', currentTime)

        var portal = document.querySelector("#karaokePortal")

        // Make portal  appear when video playback is at 8
        if (videoVisible && currentTime >= 8 && this.data.once) {
        console.log('go')

            portal.object3D.visible = true;
            portal.components.sound.playSound();
            this.data.once= false
        }
      }
  })