AFRAME.registerComponent('play-video-three', {
    schema: {
      once: {default: true},
    },
    init: function () {
        this.playNextVideo = this.playNextVideo.bind(this);
        var button = document.querySelector("#buttonTwo")

        button.addEventListener('click', this.playNextVideo);
    },
    playNextVideo: function() {
        // KARAOKE video

        // remove video 
        var videoEl = document.querySelector("#video")
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
        var nextVideoEl = document.querySelector("#thirdVideo")
        nextVideoEl.getAttribute('material').src.play()
        nextVideoEl.object3D.visible = true;
  
        // make buttons disappear
        var button = document.querySelector("#buttonTwo")
        button.object3D.visible = false;
        document.querySelector("#textTwo").object3D.visible = false 

        var buttonOne = document.querySelector("#buttonOne")
        if (buttonOne) {
            buttonOne.object3D.visible = false
            document.querySelector("#textOne").object3D.visible = false
        }
        var buttonThree = document.querySelector("#buttonThree")
        if (buttonThree) {
            buttonThree.object3D.visible = false
            document.querySelector("#textThree").object3D.visible = false
        }
        
        // make escape button appear
        document.querySelector("#escapeButton").object3D.visible = true;

        // remove listeners
        button.removeEventListener('click', this.playNextVideo);
    }
  })