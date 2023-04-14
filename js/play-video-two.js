AFRAME.registerComponent('play-video-two', {
    schema: {
      once: {default: true},
    },
    init: function () {
        this.playNextVideo = this.playNextVideo.bind(this);
        this.appearPortal = this.appearPortal.bind(this);

        var button = document.querySelector("#buttonOne")

        button.addEventListener('click', this.playNextVideo);

        setTimeout(() => {
            this.appearPortal()
        }, 3000);
    },
    playNextVideo: function() {
        // OUTDOOR video

        // remove video 
        var videoEl = document.querySelector("#video")
        videoEl.getAttribute('material').src.pause()
        videoEl.object3D.visible = false;
  
        // make second video appear
        var secVideoEl = document.querySelector("#secondVideo")
        secVideoEl.getAttribute('material').src.play()
        secVideoEl.object3D.visible = true;
  
        // make triangle and portal disappear
        var button = document.querySelector("#buttonOne")
        button.object3D.visible = false;
        document.querySelector("#textOne").object3D.visible = false
        document.querySelector("#buttonTwo").object3D.visible = false
        document.querySelector("#textTwo").object3D.visible = false 
        
        // remove listeners
        button.removeEventListener('click', this.playNextVideo);
    },
    appearPortal: function () {  
        var videoEl = document.querySelector("#secondVideo")
        var portal = document.querySelector("#portal")

        // make portal appear 3 seconds in to second next video
        if (videoEl) portal.object3D.visible = true;
    }
  })