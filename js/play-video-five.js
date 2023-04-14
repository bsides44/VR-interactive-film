AFRAME.registerComponent('play-video-five', {
    schema: {
      once: {default: true},
    },
    init: function () {
        this.playNextVideo = this.playNextVideo.bind(this);
        var button = document.querySelector("#buttonThree")

        button.addEventListener('click', this.playNextVideo);
    },
    playNextVideo: function() {
        // ARTICULATE video

        // remove video 
        var videoEl = document.querySelector("#fourthVideo")
        var portalVid = document.querySelector("#portalVideo")
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

        // set portal to appear
        var portal = document.querySelector("#karaokePortal")

        setTimeout(() => {
            portal.object3D.visible = true;
            portal.components.sound.playSound();
            this.data.once= false
        }, 8000);
    },
  })