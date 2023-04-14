AFRAME.registerComponent('play-last-video', {
    init: function () {
        console.log('play last video init')
        this.playLastVid = this.playLastVid.bind(this);

        setTimeout(() => {
            this.playLastVid()
        }, 12000);
    },
    playLastVid: function() {
        // CHEERS video

        // remove video 
        var videoEl = document.querySelector("#thirdVideo")
        videoEl.getAttribute('material').src.pause()
        videoEl.object3D.visible = false;
  
        // make last video appear
        var secVideoEl = document.querySelector("#lastVideo")
        secVideoEl.getAttribute('material').src.play()
        secVideoEl.object3D.visible = true;
    },
  })