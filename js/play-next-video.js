AFRAME.registerComponent('play-next-video', {
    schema: {
      once: {default: true},
    },
    init: function () {
        this.playNextVideo = this.playNextVideo.bind(this);
        this.tick = this.tick.bind(this);

        var triangle = document.querySelector("#nextVideoButton")

        triangle.addEventListener('click', this.playNextVideo);
    },
    playNextVideo: function() {
        // remove video 
        var videoEl = document.querySelector("#video")
        videoEl.getAttribute('material').src.pause()
        videoEl.object3D.visible = false;
  
        // make second video appear
        var secVideoEl = document.querySelector("#secondVideo")
        secVideoEl.getAttribute('material').src.play()
        secVideoEl.object3D.visible = true;
  
        // appear new plane
        var planeModel = document.querySelector("#animModel")
        if (planeModel) planeModel.parentNode.removeChild(planeModel);
        var secondModel = document.querySelector("#secondModel")
        secondModel.object3D.visible = true
        secondModel.emit(`startanim002`, null, false);
        secondModel.components.sound.playSound();
  
        // make triangle and portal disappear
        var triangle = document.querySelector("#nextVideoButton")
        triangle.object3D.visible = false;
        document.querySelector("#nextText").object3D.visible = false
        document.querySelector("#portal").object3D.visible = false
        
        // remove listeners
        var vrPortal = document.querySelector("#portalVR")
        triangle.removeEventListener('click', this.playNextVideo);
        window.removeEventListener('xbuttondown', this.playPortalVideo)
        window.removeEventListener('abuttondown', function() {
            vrPortal.setAttribute('scale', '1 1 1')
        })
        window.removeEventListener('abuttonup', function() {
            vrPortal.setAttribute('scale', '0.2 0.2 0.2')
        })
    },
    tick: function () {  
        var videoEl = document.querySelector("#video")
        var currentTime = videoEl.components.material.data.src.currentTime

        // autoplay next video at end of first video
        if (videoEl && currentTime >= 23 && this.data.once) {
            this.playNextVideo()
            this.data.once = false
        }
    }
  })